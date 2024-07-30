import * as React from "react";
import { Link } from "gatsby";

import biglogo from "../img/smalllogo.jpeg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import whatsapp from "../img/social/whatsapp.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter" style={{padding: '0px'}}>
        <div className="has-text-centered">
          <img
            src={biglogo}
            alt="awaarchitect"
            style={{ width: "9em", padding: "10px", paddingTop: "25px", }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "95vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/selected">
                        Selected Works
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/residential">
                        Residential
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/hospitality">
                        Hospitality
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/urban">
                        Urban
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        All Works
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <section style={{marginTop: "20px", marginBottom: "20px"}}>
                  <p style={{color: "rgb(197 197 197)"}}>Reach Us:</p>
                  <a title="instagram" href="https://www.instagram.com/awaarchitect/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="whatsapp" href="https://wa.me/6285792691277">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
