import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { path: "" };
  }

  componentDidMount() {
    const history = createBrowserHistory();
    this.state.path = history.location.pathname;
  }
  render() {
    return (
      <div>
        <header>
          <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
            id="main_nav"
          >
            <div class="container">
              <Link class="navbar-brand" to="/">
                FAMOUS ASTRONAUTS
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Home
                      <span class="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/astronauts">
                      Astronauts
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#">
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Register
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
