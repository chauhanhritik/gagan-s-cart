import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Segment,
  Button,
  Grid,
  Form,
  Divider,
  Header,
  Message,
} from "semantic-ui-react";
import './Login.css'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "", Operation: "LogIn" };
  }

  render() {
    return (
      <Container fluid>
        <Segment
          style={
            this.state.Operation === "LogIn"
              ? {
                  width: "60vw",
                  height: "60vh",
                  margin: "0 auto",
                  marginTop: "15vh",
                }
              : {
                  width: "30vw",
                  height: "60vh",
                  margin: "0 auto",
                  marginTop: "15vh",
                }
          }
        >
          <Grid
            columns={this.state.Operation === "LogIn" ? 2 : 1}
            relaxed="very"
            stackable
          >
            {this.state.Operation === "LogIn" ? (
              <Grid.Column>
                <Header style={{ marginTop: 0 }} size="large">
                  Log In
                </Header>
                <Divider></Divider>
                <Form style={{ paddingTop: "7vh" }}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    placeholder="Username"
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(event) => {
                      this.setState({ password: event.target.value });
                    }}
                  />
                  <Segment basic textAlign={"center"}>
                    <Button
                      circular
                      onClick={this.onLoginClick}
                      content="Login"
                      primary
                    />
                    {this.state.message != "" ? (
                      <Message>
                        <Message.Header>this.state.message</Message.Header>
                      </Message>
                    ) : (
                      ""
                    )}
                  </Segment>
                </Form>
              </Grid.Column>
            ) : (
              ""
            )}

            <Grid.Column verticalAlign="middle">
              <Segment basic vertical>
                {this.state.Operation !== "LogIn" ? (
                  <>
                    <Header size="large"> Sign Up</Header>
                    <Divider></Divider>
                    <Form>
                      <Form.Input
                        icon="user"
                        iconPosition="left"
                        label="Username"
                        placeholder="Username"
                        onChange={(event) => {
                          this.setState({ email: event.target.value });
                        }}
                      />
                      <Form.Input
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) => {
                          this.setState({ password: event.target.value });
                        }}
                      />
                      <Segment basic textAlign={"center"}>
                        <Button
                          circular
                          onClick={this.onSignUpClick}
                          content="Sign Up"
                          primary
                        />
                        <Header
                          
                          onClick={() => {
                            this.setState({
                              Operation: "LogIn",
                            });
                          }}
                          size="tiny"
                          className = 'bottom-signup'
                        >
                          Already have an account ? Log In
                        </Header>
                        {this.state.message != "" ? (
                          <Message>
                            <Message.Header>
                              {this.state.message}
                            </Message.Header>
                          </Message>
                        ) : (
                          ""
                        )}
                      </Segment>
                    </Form>
                  </>
                ) : (
                  <>
                    <center>
                      {" "}
                      <Button
                        
                        content="Sign up"
                        icon="signup"
                        size="big"
                        onClick={() => {
                          this.setState({ Operation: "SignIn" });
                        }}
                      />
                      <Header.Content>New to us ? Sign up now.</Header.Content>
                    </center>
                  </>
                )}
              </Segment>
            </Grid.Column>
          </Grid>
          {this.state.Operation === "LogIn" ? (
            <Divider vertical>Or</Divider>
          ) : (
            ""
          )}
        </Segment>
      </Container>
      // <div>
      //   <h4 className="m-1 p-2 border-bottom">Login</h4>
      //   <div className="form-group form-row">
      //     <label className="col-lg-4">Email : </label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       value={this.state.email}
      //       onChange={(event) => {
      //         this.setState({ email: event.target.value });
      //       }}
      //     />
      //   </div>
      //   <div className="form-group form-row">
      //     <label className="col-lg-4">Password:</label>
      //     <input
      //       type="password"
      //       className="form-control"
      //       value={this.state.password}
      //       onChange={(event) => {
      //         this.setState({ password: event.target.value });
      //       }}
      //     />
      //   </div>
      //   <div className="text-right">
      //     {this.state.message}
      //     <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
      //       Login
      //     </button>
      //   </div>
      // </div>
    );
  }

  componentDidMount() {
    document.title = "Login-eCommerce";
  }
  onLoginClick = async () => {
    axios
      .get("/api/users", {
        params: {
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then((res) => {
        this.setState({
          message: <span className="text-success">Succesfully Logged in </span>,
        });

        this.props.updateCurrentUserState({
          user: this.state.email,
          loginStatus: true,
        });
        this.props.history.replace("/dashboard/newProduct");
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: <span className="text-danger">Invalid login try again</span>,
        });
      });
  };
}
