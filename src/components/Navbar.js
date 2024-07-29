import React from "react";
import { Link } from "gatsby";
import smalllogo from "../img/smalllogo.png";
import biglogoside from "../img/biglogoside.png";
import './Navbar.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style="background: #465f80"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={biglogoside} alt="awaarchitect" className="is-hidden-touch"/>
              <img src={smalllogo} alt="awaarchitect" className="is-hidden-desktop"/>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <div className="navbar-item has-dropdown is-hoverable" >
                
                <input type="checkbox" id="dropdown1"/>
                <label for="dropdown1" className="navbar-link is-arrowless">Category</label>
                <div className="navbar-dropdown is-boxed" id="dropdown-content1">
                  <Link className="navbar-item" to="/selected">
                    Selected Works
                  </Link>
                  <Link className="navbar-item" to="/residential">
                    Residential
                  </Link>
                  <Link className="navbar-item" to="/hospitality">
                    Hospitality
                  </Link>
                  <Link className="navbar-item" to="/urban">
                    Urban
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/all">
                All Works
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
