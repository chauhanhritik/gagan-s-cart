import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  
  render() {
	  
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4">Email : </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div className="text-right">
          {this.state.message}
          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
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
		this.props.history.replace("/dashboard");
        this.props.updateIsLoggedInStatus(true);
		 
      }).catch((err) =>
	  {
		this.setState({
			message : <span className="text-danger">Invalid login try again</span>
		})
	  })

    
  };
}
