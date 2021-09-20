import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Button,Header,Segment,Grid,Search} from 'semantic-ui-react'
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light  highlight">
          <div className="container-fluid">
            <a className="navbar-brand" href="\#">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {!this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                      exact={true}
                    >
                      Login
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/dashboard"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/customers"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Customers
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/cart"
                      className="nav-link"
                      activeClassName="active"
                    >
                      ShoppingCart
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <a
                      href="/"
                      className="nav-link"
                      onClick={this.onLogoutClick}
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              <div style={{ float: "right" }} className="nav-item">
               
                  {/* <NavLink to="/customers" activeClassName="active"  className="nav-link">
                    Customers
                  </NavLink> */}
                  <Grid>
      <Grid.Column width={6}>
        <Search
          // loading={loading}
          // onResultSelect={(e, data) =>
          //   dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          // }
          // onSearchChange={handleSearchChange}
          // results={results}
          value={{'search'}}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
                 
              </div>
            </div>
            {/* end of navbar-collapse */}
          </div>
          {/* end of container-fluid */}
        </nav>
      </React.Fragment>
    );
  }

  onLogoutClick = (event) => {
    event.preventDefault();
    this.props.updateIsLoggedInStatus(false);

    document.location = "/";
  };
}

export default NavBar;
