import React, { Component } from 'react'

export default class Login extends Component {
	constructor(props)
	{
		super(props);
		this.state = {email : "scott@text.com",password : "scott123" , messaage : ""}
	}
	render() {
		return (
			<div>
				<h4 className="m-1 p-2 border-bottom">Login</h4>
				<div className="form-group form-row">
					<label className="col-lg-4">Email : </label>
					<input
					type="text"
					className= "form-control" value={this.state.email}
					onChange = {(event) =>
					{
						this.setState({email : event.target.value});
					}}

					/>
				</div>
				<div className="form-group form-row">
					<label  className="col-lg-4">
						Password: 
					</label>
					<input
					type="password"
					className= "form-control"
					value={this.state.password}
					onChange = {(event) => {
						this.setState({password : event.target.value});
					}}
					/>
				</div>
				<div className="text-right">
					{this.state.messaage}
					<button className="btn btn-primary m-1"
					onClick = {this.onLoginClick}
					>Login</button>
				</div>
			</div>
		);
	}

	componentDidMount()
	{
		document.title = "Login-eCommerce";
	}
	onLoginClick = async() =>
	{
		
	}
}
