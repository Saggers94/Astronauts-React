import React, { Component } from "react";

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <footer class="pt-5 pb-5 bg-dark" id="main_footer">
          <div class="container">
            <p class="m-0 text-center text-white">
              Copyright &copy; Your Website 2020
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
