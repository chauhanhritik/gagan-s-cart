import React, { Component } from "react";
import { NavLink, Redirect ,useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Header, Segment, Grid, Search } from "semantic-ui-react";
import "./NavBar.css"; 


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, searchValue: null };
   
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

              {/* <NavLink to="/customers" activeClassName="active"  className="nav-link">
                    Customers
                  </NavLink> */}
              <Grid>
                <Grid.Row width={16}>
                  <Grid.Column width={4}>
                    <Button
                      circular
                      color="green"
                      onClick={this.onSearch}
                    >
                      Search
                      {/* <NavLink 
                      as='div'
                      to={`/dashboard/${this.state.searchValue}`}>
                      
                        Search
                      </NavLink> */}
                    </Button>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {" "}
                    <Search
                      fluid
                      // loading={loading}
                      // onResultSelect={(e, data) =>
                      //   dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                      // }
                      // onSearchChange={handleSearchChange}
                      // results={results}
                      onSearchChange={(event) => {
                        this.setState({
                          searchValue: event.target.value,
                        });
                      }}
                      value={this.state.searchValue}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
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
  onSearch = () => {
     
    this.props.history.push(`/dashboard/${this.state.searchValue}`);
    this.props.history.go(0);
    // document.location = 
    
    
  };
}

export default NavBar;
