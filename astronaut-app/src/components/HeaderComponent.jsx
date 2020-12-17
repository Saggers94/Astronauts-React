import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
              <a class="navbar-brand" href="/">
                FAMOUS ASTRONAUTS
              </a>
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
                    <a class="nav-link active" href="/">
                      Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/astronauts">
                      Astronauts
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact
                    </a>
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