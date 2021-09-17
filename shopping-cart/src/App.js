import logo from './logo.svg';
import {Menu,Segment} from 'semantic-ui-react';
import './App.css'; 
import React,{Component,useEffect,useState} from 'react';
import {Route,Router,Switch} from 'react-router';
import history  from './history';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/NavBar/NavBar'; 
import Login from './Components/Login/Login';


export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {isLoggedIn : false};
  }
  render() {
    return (
      <Router>
        <NavBar
        isLoggedIn = {this.props.isLoggedIn}
        updateIsLoggedInStatus  = {this.updateIsLoggedInStatus}
        />
       <div className="container-fluid">
          <div className="row">
            {/* <div className="col-lg-3">
              {this.state.isLoggedIn ? <SideBar /> : ""}
            </div> */}

            <div className="col-lg-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                {/* <Route path="/customers" exact component={CustomersList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductByID} />
                <Route path="/new-customer" exact component={NewCustomer} /> */}
                {/* <Route
                  path="/edit-customer/:id"
                  exact
                  component={UpdateCustomer}
                />
                <Route path="/*" component={NoMatchPage} /> */}
              </Switch>
            </div>
          </div>
        </div> 
      </Router>
    )
  }
}


 
