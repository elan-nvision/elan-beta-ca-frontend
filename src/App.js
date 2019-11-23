import React from "react";
import { Form, FormGroup, Col, Input, Row } from "reactstrap";
import $ from "jquery";
import auth0 from "auth0-js";
import axios from "axios";
import { thisExpression } from "@babel/types";
import "antd/dist/antd.css";
import { Layout, Menu, Card, Button, Icon } from "antd";
import LogoElan from "./favicon.png";
import { Typography } from "antd";

const { Text } = Typography;

const { Header, Content, Footer } = Layout;

let globalRootURL = "https://ca.elan.org.in";

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
    document.body.style.backgroundColor = "#f0f2f5";
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
      <Layout className="layout">
        <Header>
          <div className="logo" style={{ float: "left", display: "inline" }}>
            <img
              src={LogoElan}
              style={{
                width: "50px",
                height: "50px",
                display: "inline",
                marginRight: "10px"
              }}
            />
            <Text
              style={{ display: "inline", color: "white", fontSize: "1.8rem" }}
            >
              Campus Ambassador Portal
            </Text>
          </div>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px", display: "inline" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Content style={{ padding: "2% 2%" }}>
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 280,
              fontSize: "1.8rem"
            }}
          >
            <p style={{ textAlign: "left" }}>
              This is an invitation to the college janta of the city to become
              the Campus Ambassadors of ELAN & nVision 2020. The Campus
              Ambassador program provides you with an opportunity to be more
              closely associated with the fest than just another participant. A
              Campus Ambassador will be the first contact between ELAN and
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
                Interested individuals may register at the link provided above.
                The applicants will be shortlisted by our team and the selected
                Campus Ambassadors will be mailed.{" "}
              </li>
              <li>
                Campus ambassadors will be awarded certain points for each task
                they complete
              </li>
              <li>
                The registered campus ambassadors will be provided with a unique
                referral code which can be used to login to the CA portal and
                view the leaderboard. The CA portal will be updated regularly
                with new tasks.{" "}
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
                Top performing CAs will receive recognition on our social media
                platforms and official website
              </li>
              <li>Certificates from Elan&nVision IIT Hyderabad</li>
            </ul>
            <div style={{ textAlign: "center" }}>
              <Button type="primary" size="large" onClick={this.authenticate}>
                LOG IN / REGISTER
              </Button>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          © 2020 Elan & nVision 2020
        </Footer>
      </Layout>
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
    contactNumber: "",
    referredBy: "",
    current: "home"
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPoints = this.renderPoints.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.getData = this.getData.bind(this);
    this.logout = this.logout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.homeRef = React.createRef();
    this.tasksRef = React.createRef();
    this.rulesRef = React.createRef();
    this.setTasks = this.setTasks.bind(this);
  }
  setTasks() {
    this.homeRef.current.style.display = "none";
    this.rulesRef.current.style.display = "none";
    this.tasksRef.current.style.display = "block";
    this.setState({ current: "tasks" });
  }
  handleClick(e) {
    if (e.item.node.innerText == "Home") {
      this.homeRef.current.style.display = "block";
      this.rulesRef.current.style.display = "none";
      this.tasksRef.current.style.display = "none";
      this.setState({ current: "home" });
    } else if (e.item.node.innerText == "Tasks") {
      this.homeRef.current.style.display = "none";
      this.rulesRef.current.style.display = "none";
      this.tasksRef.current.style.display = "block";
      this.setState({ current: "tasks" });
    } else if (e.item.node.innerText == "Rules") {
      this.homeRef.current.style.display = "none";
      this.rulesRef.current.style.display = "block";
      this.tasksRef.current.style.display = "none";
      this.setState({ current: "rules" });
    }
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
      this.state.contactNumber +
      "&referredBy=" +
      this.state.referredBy;
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
      <Layout className="layout">
        <Header>
          <div className="logo" style={{ float: "left", display: "inline" }}>
            <img
              src={LogoElan}
              style={{
                width: "50px",
                height: "50px",
                display: "inline",
                marginRight: "10px"
              }}
            />
            <Text
              style={{ display: "inline", color: "white", fontSize: "1.8rem" }}
            >
              Campus Ambassador Portal
            </Text>
          </div>
          {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px", display: "inline" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
        </Header>
        <Content style={{ padding: "2% 2%" }}>
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 280,
              fontSize: "1.8rem"
            }}
          >
            <h2 style={{ textAlign: "center" }}>Registration Form</h2>
            <Form onSubmit={this.submitForm} style={{ paddingTop: "10px" }}>
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
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="referredBy"
                      placeholder="Were you referred here by another CA? If yes, enter their referral code here. "
                      value={this.state.referredBy}
                      onChange={this.handleInputChange}
                      rows="3"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12} style={{ textAlign: "center" }}>
                  <Button type="primary" size="large" onClick={this.submitForm}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Content>
      </Layout>
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
        <Layout className="layout">
          <Header>
            <div className="logo" style={{ float: "left", display: "inline" }}>
              <img
                src={LogoElan}
                style={{
                  width: "50px",
                  height: "50px",
                  display: "inline",
                  marginRight: "10px"
                }}
              />
              <Text
                style={{
                  display: "inline",
                  color: "white",
                  fontSize: "1.8rem"
                }}
              >
                Campus Ambassador Portal
              </Text>
            </div>
          </Header>
          <Content style={{ padding: "2% 2%" }}>
            <div
              style={{
                background: "#fff",
                padding: 24,
                minHeight: 280,
                fontSize: "1.8rem"
              }}
            >
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <Icon type="home" />
                  Home
                </Menu.Item>
                <Menu.Item key="tasks">
                  <Icon type="check-square" />
                  Tasks
                </Menu.Item>
                <Menu.Item key="rules">
                  <Icon type="book" />
                  Rules
                </Menu.Item>
              </Menu>
              <div
                class="home"
                style={{ textAlign: "center" }}
                ref={this.homeRef}
              >
                <h3 style={{ marginTop: "40px" }}>
                  Welcome, {this.state.fname} {this.state.lname}
                </h3>
                <h4>
                  Your referral code is {this.state.rcode}. When people use this
                  code to sign up, you will be awarded points.
                </h4>
                <h4>
                  So far, {this.state.no_of_people}{" "}
                  {this.state.no_of_people == 1 ? "person has" : "people have"}{" "}
                  used your referral code and you've been awarded{" "}
                  {this.state.points} points.
                </h4>
                <Button
                  type="primary"
                  onClick={this.setTasks}
                  size="large"
                  style={{ marginTop: "10px" }}
                >
                  My Tasks
                </Button>
                <br />
                <Button
                  type="primary"
                  onClick={this.logout}
                  size="large"
                  style={{ marginTop: "10px" }}
                >
                  Log out
                </Button>
              </div>
              <div
                class="home"
                style={{
                  marginTop: "20px",
                  display: "none"
                }}
                ref={this.tasksRef}
              >
                <Card title="Task 1" style={{ fontSize: "1.8rem" }}>
                  Your first task as a campus ambassador for ELAN and Nvision
                  2020 will be to get more campus ambassadors. With every
                  candidate that applies using your referral code, you get 50
                  points. If the applicant gets selected to be a campus
                  ambassador, you'll get an additional 50 points. Hurry up and
                  get your friends to apply! <br /> <br />
                  The weightage (number of points) of this task will continue to
                  reduce. <br />
                  <br />
                  When your friend signs up with your referral code, they will
                  be awarded 25 points as well.
                  <br />
                  [This task does not require submission of proof]
                </Card>
                <br />
                <Card
                  title="Task 2 has expired"
                  style={{ fontSize: "1.8rem" }}
                  color="danger"
                >
                  ELAN & Nvision 2020's first online event- The Online LitFest
                  is now live! Share and spread the word! <br />
                  <br />
                  Post the overall poster that has been posted on the Facebook
                  and Instagram pages of ELAN and Nvision. <br />
                  <br />
                  Facebook story: 25 <br />
                  Facebook post: 35 <br />
                  Instagram story: 35
                  <br />
                  Instagram post: 50 <br />
                  Whatsapp story: 35 <br />
                  <br />
                  Additional points will be allotted when proof of other
                  offline/online publicity is presented to the organisers.
                </Card>
              </div>
              <div
                class="home"
                style={{ marginTop: "20px", display: "none" }}
                ref={this.rulesRef}
              >
                <ol>
                  <li>
                    Points are allotted by our organisers and the team's
                    decision will be final.
                  </li>
                  <li>
                    Organisers will soon make a WhatsApp group with the contact
                    number you share with us and will keep you informed of all
                    further tasks.{" "}
                  </li>
                  <li>
                    The proofs of tasks completed should be sent to the
                    organiser that contacts you.{" "}
                  </li>
                  <li>
                    To submit proof of a task completed, you will be required to
                    send a screenshot of the post/story after a minimum of 20
                    hours of posting (on Instagram, a screenshot from the story
                    archives), with the number of views/likes/comments clearly
                    visible. Additional points maybe allotted based on the
                    engagement your story/post receives.{" "}
                  </li>
                  <li>
                    Feel free to communicate any ideas you have for publicising
                    ELAN & Nvision and it's events with the organisers.{" "}
                  </li>
                </ol>
              </div>
            </div>
          </Content>
        </Layout>
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
