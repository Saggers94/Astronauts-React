import React, { Component } from "react";

export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="row mt-1 mb-5">
          <div class="col col-xs-12">
            <h1 class="mt-4">Contact Us</h1>
            <form id="contact_form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>

              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div class="form-group">
                <label for="text">Inquiry Text</label>
                <textarea
                  class="form-control"
                  id="text"
                  rows="3"
                  name="text"
                ></textarea>
              </div>

              <p>
                <button type="submit" class="btn btn-color mb-3">
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
