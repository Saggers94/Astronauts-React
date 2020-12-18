import React, { Component } from "react";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section>
          <div class="container">
            <div class="row mt-3 mb-5">
              <div class="col col-xs-4">
                <img
                  src={require("../images/astronaut.svg").default}
                  class="main_astronaut_img"
                />
              </div>
              <div class="col col-xs-8 align-self-center">
                <h1 class="title">Famous Astronauts</h1>
                <p class="lead">
                  Through this website you will have the information about
                  top-notch Astronauts and how they contributed to the world of
                  science.
                </p>
                <p>
                  An astronaut is a person who is specially trained to travel
                  into outer space. Astronauts aboard a spacecraft may have
                  different responsibilities. Typically there is a commander who
                  leads the mission and a pilot. Other positions may include
                  flight engineer, payload commander, mission specialist, and
                  science pilot.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
