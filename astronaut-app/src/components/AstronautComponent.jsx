import React, { Component } from "react";
import AstronautsServices from "../Services/AstronautsServices";

export default class AstronautComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { astronauts: [] };
  }

  componentDidMount() {
    AstronautsServices.getAstronauts().then((res) => {
      this.setState({ astronauts: res.data });
      //   console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <section class="list">
          <div class="container">
            <h1 class="mt-4">Top 10 Famous Astronauts</h1>
            <hr class="hr_style" />

            {this.state.astronauts.map((astronaut) => (
              <div class="row mb-4" key={astronaut.astronaut_id}>
                <div class="col col-sm-4">
                  <h2 class="mt-2">{astronaut.name}</h2>
                  <img
                    class="astronaut_image"
                    src={require(`../images/${astronaut.image}`).default}
                    alt="Astronaut Buzz Aldrin"
                  />
                </div>
                <div class="col col-sm-8">
                  <p class="lead lead_in_list">
                    <strong class="font-weight-bold">
                      Personal Information:{" "}
                    </strong>
                    {astronaut.personal_data}
                  </p>
                  <p>
                    <a
                      href={`/astronauts/${astronaut.astronaut_id}`}
                      alt="Detail about Buzz Aldrin"
                    >
                      Read More
                    </a>
                  </p>
                </div>
                <hr class="hr_style" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
