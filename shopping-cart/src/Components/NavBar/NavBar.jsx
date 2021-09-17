import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
	console.log(props)
	function onLogoutClick(event) {
		event.preventDefault();
	
		this.props.updateIsLoggedInStatus(false);
		// history.replace("/");
		document.location.hash = "/";
	  };
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
                {!props.isLoggedIn ? (
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
                {props.isLoggedIn ? (
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

                {props.isLoggedIn ? (
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

                {props.isLoggedIn ? (
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

                {props.isLoggedIn ? (
                  <li className="nav-item">
                    <a
                      href="/#"
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
            </div>
            {/* end of navbar-collapse */}
          </div>
          {/* end of container-fluid */}
        </nav>
      </React.Fragment>
	);
};

export default NavBar;