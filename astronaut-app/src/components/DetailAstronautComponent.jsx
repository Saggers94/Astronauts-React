import React, { Component } from "react";
import "react-dom";
import AstronautsServices from "../Services/AstronautsServices";

export default class DetailAstronautComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      astronaut: {},
      image: "",
      self: this,
    };
  }

  componentDidMount() {
    AstronautsServices.getAstronautById(this.state.id).then((res) => {
      this.setState({
        astronaut: res.data,
        image: require("../images/" + res.data.image).default,
      });
    });
  }

  render() {
    return (
      <div>
        <div class="row">
          <section class="list">
            <div class="container">
              <h1 class="mt-4">Astronaut: {this.state.astronaut.name}</h1>
              <hr class="hr_style" />

              <div class="row">
                <div class="col col-sm-4">
                  <h2 class="mt-2">{this.state.astronaut.name}</h2>
                  <img
                    class="astronaut_image"
                    src={this.state.image}
                    alt={`Astronaut ${this.state.astronaut.name}`}
                  />
                </div>
                <div class="col col-sm-8">
                  <p class="lead lead_in_list">
                    <strong class="font-weight-bold">
                      Personal Information:{" "}
                    </strong>
                    {this.state.astronaut.personal_data}
                  </p>
                  <a href="/"></a>
                </div>
              </div>
              <div class="row">
                <div class="col col-sm-12">
                  <p>
                    <strong class="font-weight-bold">
                      Career Information:{" "}
                    </strong>
                    {this.state.astronaut.description}
                  </p>
                  <p>
                    <strong class="font-weight-bold">Service: </strong>
                    {this.state.astronaut.service}
                  </p>
                  <p>
                    <strong class="font-weight-bold">
                      Days Spent In Space:{" "}
                    </strong>
                    {this.state.astronaut.days_spent_in_space}
                  </p>
                  <p>
                    <strong class="font-weight-bold">Nationality: </strong>
                    American
                  </p>
                  <hr class="hr_style" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}