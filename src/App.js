import logo from './logo.svg';
import { Menu, Segment } from 'semantic-ui-react';

import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router';
import history from './history';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/NavBar/NavBar';
import NewUser from './Components/NewUser/NewUser';
import Login from './Components/Login/Login';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  render() {
    return (
      <Router history={history}>



        <NavBar
          history={history}
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />






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
          {/* <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                /> */}
          <Route  match path="/dashboard/:id" 
             component={Dashboard} />
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



      </Router>
    );
  }
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  }
}



