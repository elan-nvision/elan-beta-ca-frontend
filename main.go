package main

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"math/rand"
	"net/http"
	"regexp"
	"strconv"
	"strings"
	"time"

	jwtmiddleware "github.com/auth0/go-jwt-middleware"
	"github.com/codegangsta/negroni"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/lib/pq"
	_ "github.com/lib/pq"
)

var seededRand *rand.Rand = rand.New(rand.NewSource(time.Now().UnixNano()))
var rxEmail = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

type ParticipantDatabaseObject struct {
	Fname     string
	Lname     string
	Institute string
	Email     string
	Age       int
	Rcode     string
	Events    []int
}

type CADatabaseObject struct {
	Email        string `json:"email"`
	Fname        string `json:"fname"`
	Lname        string `json:"lname"`
	Institute    string `json:"institute"`
	Age          int    `json:"age"`
	Rcode        string `json:"rcode"`
	Points       int    `json:"points"`
	No_of_people int    `json:"no_of_people"`
	Fb_handle    string `json:"fb_handle"`
	Insta_handle string `json:"insta_handle"`
	Ideas        string `json:"ideas"`
	Phone        string `json:"phone"`
	ReferredBy   string `json:"referredBy"`
}

type Response struct {
	Message string `json:"message"`
}

type Jwks struct {
	Keys []JSONWebKeys `json:"keys"`
}

type JSONWebKeys struct {
	Kty string   `json:"kty"`
	Kid string   `json:"kid"`
	Use string   `json:"use"`
	N   string   `json:"n"`
	E   string   `json:"e"`
	X5c []string `json:"x5c"`
}

const (
	host     = "localhost"
	port     = 5432
	user     = "vish"
	password = "dontaskagain"
	dbname   = "elan_2020_beta"
)

var db *sql.DB

func main() {
	corsObj := handlers.AllowedOrigins([]string{"*"})
	var err error
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}
	db.SetMaxOpenConns(50000)
	db.SetMaxIdleConns(0)
	db.SetConnMaxLifetime(time.Nanosecond)
	fmt.Println("Set up postgre db")
	jwtMiddleware := jwtmiddleware.New(jwtmiddleware.Options{
		ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
			// Verify 'aud' claim
			aud := "https://elan-nvision.auth0.com/api/v2/"
			checkAud := token.Claims.(jwt.MapClaims).VerifyAudience(aud, false)
			if !checkAud {
				return token, errors.New("Invalid audience.")
			}
			// Verify 'iss' claim
			iss := "https://elan-nvision.auth0.com/"
			checkIss := token.Claims.(jwt.MapClaims).VerifyIssuer(iss, false)
			if !checkIss {
				return token, errors.New("Invalid issuer.")
			}

			cert, err := getPemCert(token)
			if err != nil {
				panic(err.Error())
			}

			result, _ := jwt.ParseRSAPublicKeyFromPEM([]byte(cert))
			return result, nil
		},
		SigningMethod: jwt.SigningMethodRS256,
	})
	router := mux.NewRouter()
	router.Handle("/api/private", negroni.New(
		negroni.HandlerFunc(jwtMiddleware.HandlerWithNext),
		negroni.Wrap(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			fmt.Println(r.Header)
			tokenString := r.URL.Query()["token"][0]
			claims := jwt.MapClaims{}
			jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
				x, err := getPemCert(token)
				return []byte(x), err
			})
			email := claims["email"].(string)
			rows, err := db.Query(`SELECT EXISTS(SELECT * FROM elan_ca_details WHERE email = $1)`, email)
			if err != nil {
				fmt.Println("Error in reading DB object", err)
			}
			defer rows.Close()
			var doesUserExist bool
			rows.Next()
			err = rows.Scan(&doesUserExist)
			if err != nil {
				fmt.Println("Error in parsing", err)
			}
			if !doesUserExist {
				for {
					rcode := StringWithCharset(6, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
					fname := r.URL.Query()["fname"][0]
					lname := r.URL.Query()["lname"][0]
					institute := r.URL.Query()["institute"][0]
					age, _ := strconv.Atoi(r.URL.Query()["age"][0])
					fb_handle := r.URL.Query()["fb"][0]
					insta_handle := r.URL.Query()["insta"][0]
					ideas := r.URL.Query()["ideas"][0]
					phone := r.URL.Query()["phone"][0]
					referredBy := r.URL.Query()["referredBy"][0]
					if doesNotExist(rcode) {
						sqlStatement := `INSERT INTO elan_ca_details (email, fname, lname, institute, age, rcode, points, no_of_people, fb_handle, insta_handle, ideas, phone, referredBy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`
						_, err = db.Exec(sqlStatement, email, fname, lname, institute, age, rcode, 0, 0, fb_handle, insta_handle, ideas, phone, referredBy)
						if err != nil {
							panic(err)
						}
						sqlStatement = `UPDATE elan_ca_details SET no_of_people = no_of_people + 1 WHERE rcode = $1`
						_, err = db.Exec(sqlStatement, referredBy)
						if err != nil {
							panic(err)
						}
						break
					} else {
						continue
					}
				}
			}
			rows, err = db.Query(`SELECT * FROM elan_ca_details WHERE email = $1`, email)
			if err != nil {
				fmt.Println("Error in reading DB object", err)
			}
			defer rows.Close()
			var user CADatabaseObject
			rows.Next()
			err = rows.Scan(&user.Email, &user.Fname, &user.Lname, &user.Institute, &user.Age, &user.Rcode, &user.Points, &user.No_of_people, &user.Fb_handle, &user.Insta_handle, &user.Ideas, &user.Phone, &user.ReferredBy)
			if err != nil {
				fmt.Println("Error in parsing", err)
			}
			w.Header().Set("Content-Type", "application/json")
			w.Header().Set("Access-Control-Allow-Origin", "*")
			json.NewEncoder(w).Encode(user)
		}))))
	router.HandleFunc("/doesuserexist/{email}", DoesUserExistHandler)
	router.HandleFunc("/register/{fname}/{lname}/{institute}/{age}/{email}/{rcode}/{events}", RegistrationHandler)
	router.PathPrefix("/").Handler(handlers.CompressHandler(http.FileServer(http.Dir("./ca-portal/build/"))))
	http.ListenAndServe(":8080", handlers.CORS(corsObj)(router))
}
func getPemCert(token *jwt.Token) (string, error) {
	cert := ""
	resp, err := http.Get("https://elan-nvision.auth0.com/.well-known/jwks.json")

	if err != nil {

		return cert, err
	}
	defer resp.Body.Close()

	var jwks = Jwks{}
	err = json.NewDecoder(resp.Body).Decode(&jwks)
	if err != nil {
		return cert, err
	}

	for k, _ := range jwks.Keys {
		if token.Header["kid"] == jwks.Keys[k].Kid {
			cert = "-----BEGIN CERTIFICATE-----\n" + jwks.Keys[k].X5c[0] + "\n-----END CERTIFICATE-----"
		}
	}

	if cert == "" {
		err := errors.New("Unable to find appropriate key.")
		return cert, err
	}

	return cert, nil
}
func responseJSON(message string, w http.ResponseWriter, statusCode int) {
	response := Response{message}

	jsonResponse, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	w.Write(jsonResponse)
}
func doesNotExist(rcode string) bool {
	rows, err := db.Query(`SELECT EXISTS(SELECT * FROM elan_ca_details WHERE rcode = $1)`, rcode)
	if err != nil {
		fmt.Println("Error in reading DB object", err)
	}
	defer rows.Close()
	var doesUserExist bool
	rows.Next()
	err = rows.Scan(&doesUserExist)
	if err != nil {
		fmt.Println("Error in parsing", err)
	}
	return !doesUserExist
}
func StringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}
func DoesUserExistHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	vars := mux.Vars(r)
	email := vars["email"]
	rows, err := db.Query(`SELECT EXISTS(SELECT * FROM elan_ca_details WHERE email = $1)`, email)
	if err != nil {
		fmt.Println("Error in reading DB object", err)
	}
	defer rows.Close()
	var doesUserExist bool
	rows.Next()
	err = rows.Scan(&doesUserExist)
	if err != nil {
		fmt.Println("Error in parsing", err)
	}
	responseJSON(strconv.FormatBool(doesUserExist), w, http.StatusOK)
}
func RegistrationHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	vars := mux.Vars(r)
	var events []int
	for _, char := range vars["events"] {
		event, err := strconv.Atoi(string(char))
		if err != nil {
			message := "Invalid list of events. "
			responseJSON(message, w, http.StatusUnprocessableEntity)
			return
		} else {
			events = append(events, event)
		}
	}
	age, err := strconv.Atoi(vars["age"])
	user := ParticipantDatabaseObject{vars["fname"], vars["lname"], vars["institute"], vars["email"], age, strings.ToUpper(vars["rcode"]), events}
	var message string
	if len(user.Email) > 254 || !rxEmail.MatchString(user.Email) {
		message = "Your Email ID is invalid. Please fill the form again. "
	} else if strings.TrimSpace(user.Fname) == "" {
		message = "Please enter your first name. "
	} else if strings.TrimSpace(user.Lname) == "" {
		message = "Please enter your last name. "
	} else if strings.TrimSpace(user.Institute) == "" {
		message = "Please enter your institute. "
	} else if err != nil {
		message = "Your age is invalid. Please try again. "
	} else if len(user.Events) == 0 {
		message = "No events specified. "
	} else {
		rows, err := db.Query(`SELECT EXISTS(SELECT * FROM elan_registration WHERE email = $1)`, user.Email)
		if err != nil {
			fmt.Println("Error in reading DB object", err)
		}
		defer rows.Close()
		var doesUserExist bool
		rows.Next()
		err = rows.Scan(&doesUserExist)
		if err != nil {
			fmt.Println("Error in parsing", err)
		}
		if doesUserExist {
			rows, err = db.Query(`SELECT * FROM elan_registration WHERE email = $1`, user.Email)
			if err != nil {
				fmt.Println("Error in reading DB object", err)
			}
			defer rows.Close()
			var existingUser ParticipantDatabaseObject
			rows.Next()
			err = rows.Scan(&existingUser.Fname, &existingUser.Lname, &existingUser.Email, &existingUser.Institute, &existingUser.Age, &existingUser.Rcode, &existingUser.Events)
			for _, element := range user.Events {
				if !contains(existingUser.Events, element) {
					existingUser.Events = append(existingUser.Events, element)
				}
			}
			rows, err = db.Query(`UPDATE elan_registration SET events = $1 WHERE email = $2`, pq.Array(existingUser.Events), user.Email)
			message = "Events updated. "
		} else {
			sqlStatement := `INSERT INTO elan_registration (fname, lname, email, college, age, rcode, events) VALUES ($1, $2, $3, $4, $5, $6, $7)`
			_, err = db.Exec(sqlStatement, user.Fname, user.Lname, user.Email, user.Institute, user.Age, user.Rcode, pq.Array(user.Events))
			if err != nil {
				panic(err)
			}
			sqlStatement = `UPDATE elan_ca_details SET no_of_people = no_of_people + 1 WHERE rcode = $1`
			_, err = db.Exec(sqlStatement, user.Rcode)
			if err != nil {
				panic(err)
			}
			message = "User created. "
		}
	}
	responseJSON(message, w, http.StatusOK)
}
func contains(s []int, e int) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}
