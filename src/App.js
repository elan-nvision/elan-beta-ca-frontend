import React from "react";
import { Form, FormGroup, Col, Input, Row, Button } from "reactstrap";
import $ from "jquery";
import auth0 from "auth0-js";
import "./index.css";
import axios from "axios";
import { thisExpression } from "@babel/types";

let globalRootURL = "http://" + window.location.host;

const AUTH0_CLIENT_ID = "7ypOoXT5lMAP6B3LRvGJoD3eK0tBTrai";
const AUTH0_DOMAIN = "elan-nvision.auth0.com";
const AUTH0_API_AUDIENCE = "https://elan-nvision.auth0.com/api/v2/";
const AUTH0_CALLBACK_URL = globalRootURL;

class App extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
    this.renderBody = this.renderBody.bind(this);
    this.setup();
    this.parseHash();
    this.setState();
  }
  parseHash() {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID
    });
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        return console.log(err);
      }
      if (
        authResult !== null &&
        authResult.accessToken !== null &&
        authResult.idToken !== null
      ) {
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem(
          "email",
          JSON.stringify(authResult.idTokenPayload)
        );
        window.location = window.location.href.substr(
          0,
          window.location.href.indexOf("")
        );
      }
    });
  }
  setup() {
    $.ajaxSetup({
      beforeSend: function(xhr) {
        if (localStorage.getItem("access_token")) {
          xhr.setRequestHeader(
            "Authorization",
            "Bearer " + localStorage.getItem("access_token")
          );
        }
      }
    });
  }
  setState() {
    let idToken = localStorage.getItem("id_token");
    if (idToken) {
      this.state.loggedIn = true;
    } else {
      this.state.loggedIn = false;
    }
  }
  // componentWillMount() {
  //   this.setup();
  //   this.parseHash();
  //   this.setState();
  // }
  renderBody() {
    if (this.state.loggedIn) return <LoggedIn />;
    else return <Home />;
  }

  render() {
    return this.state.loggedIn === undefined ? (
      <div class="fh5co-loader"></div>
    ) : (
      <this.renderBody />
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }
  authenticate() {
    this.WebAuth = new auth0.WebAuth({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      scope: "openid email",
      audience: AUTH0_API_AUDIENCE,
      responseType: "token id_token",
      redirectUri: AUTH0_CALLBACK_URL
    });
    this.WebAuth.authorize();
  }

  render() {
    return (
      <div id="fh5co-couple" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2>Elan & nVision 2020</h2>
              <h3>Registration Portal for Campus Ambassadors</h3>
              <p style={{ textAlign: "left" }}>
                This is an invitation to the college janta of the city to become
                the Campus Ambassadors of ELAN & nVision 2020. The Campus
                Ambassador program provides you with an opportunity to be more
                closely associated with the fest than just another participant.
                A Campus Ambassador will be the first contact between ELAN and
                nVision 2020 and his/her college.{" "}
              </p>
              <p style={{ textAlign: "left" }}>
                The responsibilities of a Campus Ambassador are:
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Spread awareness regarding the fest in your institute via
                  offline and online publicity of the events- ones that happen
                  before the fest and during the fest.{" "}
                </li>
                <li>
                  Encourage and ensure participation from your institutes in the
                  events of the fest in ways you deem fit.
                </li>
                <li>
                  Perform different tasks aimed at promoting the fest which will
                  be allocated to you from time to time.
                </li>
                <li>Help Elan & nVision organise events in your college.</li>
              </ul>
              <p style={{ textAlign: "left" }}>
                About the structure of the program:{" "}
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Interested individuals may register at the link provided
                  above. The applicants will be shortlisted by our team and the
                  selected Campus Ambassadors will be mailed.{" "}
                </li>
                <li>
                  Campus ambassadors will be awarded certain points for each
                  task they complete
                </li>
                <li>
                  The registered campus ambassadors will be provided with a
                  unique referral code which can be used to login to the CA
                  portal and view the leaderboard. The CA portal will be updated
                  regularly with new tasks.{" "}
                </li>
                <li>
                  The tasks are aimed at increasing the social presence and
                  outreach of the fest through different institutes.
                </li>
              </ul>
              <p style={{ textAlign: "left" }}>Eligibility:</p>
              <ul style={{ textAlign: "left" }}>
                <li>Age requirement: 17 or above.</li>
                <li>Good communication, management and soft skills. </li>
                <li>
                  Must be enrolled in an educational institute. (school or
                  college)
                </li>
              </ul>
              <p style={{ textAlign: "left" }}>Incentives:</p>
              <ul style={{ textAlign: "left" }}>
                <li>Cash prizes</li>
                <li>
                  Elan & nVision merchandise as you cross milestones on the
                  leaderboard
                </li>
                <li>Free passes to the events of the fest</li>
                <li>Free stay provided by Elan & nVision during the fest</li>
                <li>
                  Top performing CAs will receive recognition on our social
                  media platforms and official website
                </li>
                <li>Certificates from Elan&nVision IIT Hyderabad</li>
              </ul>
              <Button
                color="primary"
                style={{ marginTop: "30px" }}
                onClick={this.authenticate}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class LoggedIn extends React.Component {
  state = {
    firstTime: null,
    fname: "",
    lname: "",
    institute: "",
    age: null,
    points: null,
    no_of_people: null,
    rcode: null,
    fbHandle: "",
    instaHandle: "",
    ideas: "",
    contactNumber: ""
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPoints = this.renderPoints.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.getData = this.getData.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    let requestURL =
      "https://ca.elan.org.in/doesuserexist/" +
      JSON.parse(localStorage.getItem("email")).email;
    axios.get(requestURL).then(res => {
      this.setState({ firstTime: !(res.data.message == "true") });
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  getData() {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("access_token")
      }
    };
    let url =
      "https://ca.elan.org.in/api/private?token=" +
      localStorage.getItem("id_token");
    axios
      .get(url, headers)
      .then(res => {
        this.setState({
          fname: res.data.fname,
          lname: res.data.lname,
          no_of_people: res.data.no_of_people,
          points: res.data.points,
          rcode: res.data.rcode
        });
      })
      .catch(error => {
        localStorage.clear();
        window.location.reload();
      });
  }
  submitForm(event) {
    event.preventDefault();
    const headers = {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("access_token")
      }
    };
    let url =
      "https://ca.elan.org.in/api/private?fname=" +
      this.state.fname +
      "&lname=" +
      this.state.lname +
      "&institute=" +
      this.state.institute +
      "&age=" +
      this.state.age +
      "&token=" +
      localStorage.getItem("id_token") +
      "&fb=" +
      this.state.fbHandle +
      "&insta=" +
      this.state.instaHandle +
      "&ideas=" +
      this.state.ideas +
      "&phone=" +
      this.state.contactNumber;
    axios
      .get(url, headers)
      .then(res => {
        window.location.reload();
      })
      .catch(error => {
        localStorage.clear();
        window.location.reload();
      });
  }

  renderForm() {
    return (
      <div id="fh5co-couple" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2>Registration Portal</h2>
              <h3>For Campus Ambassadors</h3>
              <Form style={{ marginTop: "50px" }} onSubmit={this.submitForm}>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        placeholder="First Name"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="lname"
                        value={this.state.lname}
                        placeholder="Last Name"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="institute"
                        placeholder="Institute"
                        value={this.state.institute}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        placeholder="Age"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="fbHandle"
                        placeholder="Link to your Facebook Profile"
                        value={this.state.fbHandle}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="instaHandle"
                        value={this.state.instaHandle}
                        onChange={this.handleInputChange}
                        placeholder="Instagram Handle"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Input
                        type="textarea"
                        name="ideas"
                        placeholder="What are your ideas for publicising the fest?"
                        value={this.state.ideas}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Input
                        type="textarea"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={this.state.contactNumber}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Button color="primary" style={{ marginTop: "30px" }}>
                    Submit
                  </Button>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
  renderPoints() {
    if (this.state.no_of_people == null) {
      this.getData();
      return <div class="fh5co-loader"></div>;
    } else {
      return (
        <div id="fh5co-couple" style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Elan & nVision 2020</h2>
                <h3 style={{ marginTop: "40px" }}>
                  Welcome, {this.state.fname} {this.state.lname}
                </h3>
                {/* <h4>Your referral code is {this.state.rcode}.</h4>
                <h4>
                  You have been awarded {this.state.points} points since{" "}
                  {this.state.no_of_people} people have used your referral code.
                </h4> */}
                <h4>
                  Thanks for your application. We will get back to you soon!
                </h4>
                <Button color="primary" onClick={this.logout}>
                  LOGOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    if (this.state.firstTime === true) {
      return <this.renderForm />;
    } else if (this.state.firstTime === false) {
      return <this.renderPoints />;
    } else {
      return <div class="fh5co-loader"></div>;
    }
  }
}

export default App;
