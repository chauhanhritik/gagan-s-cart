import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Label,
  Message,
  Segment,
} from "semantic-ui-react";
import { inferredPredicate } from "@babel/types";

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        horizontalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Create your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={this.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />

              <Button
                color="teal"
                flud
                size="large"
                onClick={this.createAccount}
              >
                Create Account
              </Button>
            </Segment>
          </Form>
          <Message>
            New to use? <a href="#">Sign UP</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
  createAccount = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("/api/users", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
