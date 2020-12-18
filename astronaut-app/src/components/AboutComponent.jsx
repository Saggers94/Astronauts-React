import React, { Component } from "react";

export default class AboutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="row mb-5 mt-2">
          <div class="col col-xs-4">
            <img
              src={require(`../images/logo.svg`).default}
              class="main_astronaut_img"
            />
          </div>
          <div class="col col-xs-8 align-self-center">
            <h1 class="title">About Us</h1>
            <p class="lead">
              If you are interested in the infinity of galaxies, this is the
              place where you will feel inspired to be the one that pushes the
              envelope of understanding of Astronomy and contribute to finding
              new planets for saving humanity.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
