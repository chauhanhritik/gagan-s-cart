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
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loginStatus: false };
  }
  render() {
    return (
      <Router history={history}>
        <NavBar

          history={history}
          userDetails={{ loginStatus: this.state.loginStatus, user: this.state.user }}
          updateCurrentUserState={this.updateCurrentUserState}
        />






        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Login
                {...props}
                userDetails={{ loginStatus: this.state.loginStatus, user: this.state.user }}
                updateCurrentUserState={this.updateCurrentUserState}
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
          <Route match path="/dashboard/products/:name/:asin"
            render={(props) => (
              <ProductDetails
                {...props}
                userDetails={{ loginStatus: this.state.loginStatus, user: this.state.user }}
                updateCurrentUserState={this.updateCurrentUserState}
              />
            )}
          // render={(props) => {
          //   <ProductDetails
          //   userDetails={{ loginStatus: this.state.loginStatus, user: this.state.user }}
          //   />
          // }}
          />
          <Route match path="/dashboard/:id"
            component={Dashboard} />
          <Route match path="/shopping/cart"
            render={(props) => (
              <Cart
                userDetails={{ loginStatus: this.state.loginStatus, user: this.state.user }}
              />
            )}
          />
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
  updateCurrentUserState = ({ user, loginStatus }) => {
    console.log("user : " + user + " | login : " + loginStatus);
    this.setState({
      user: user,
      loginStatus: loginStatus

    });
  }
}



