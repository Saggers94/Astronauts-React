import React, { Component, useState, useEffect } from "react";
import AstronautsServices from "../Services/AstronautsServices";
import { useParams } from "react-router-dom";

const DetailAstronautComponent = () => {
  const { id } = useParams();
  const [aid, setAid] = useState(id);
  const [astronaut, setAstronaut] = useState({});
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const getAstronaut = async (id) => {
    AstronautsServices.getAstronautById(id).then((res) => {
      setAid(id);
      setAstronaut(res.data);
      setImage(require("../images/" + res.data.image).default);
      setCategory(res.data.category.name);
    });
  };

  useEffect(() => {
    getAstronaut(aid);
  }, []);

  // console.log(id);
  return (
    <div>
      <div class="row">
        <section class="list">
          <div class="container">
            <h1 class="mt-4">Astronaut: {astronaut.name}</h1>
            <hr class="hr_style" />

            <div class="row">
              <div class="col col-sm-4">
                <h2 class="mt-2">{astronaut.name}</h2>
                <img
                  class="astronaut_image"
                  src={image}
                  alt={`Astronaut ${astronaut.name}`}
                />
              </div>
              <div class="col col-sm-8">
                <p class="lead lead_in_list">
                  <strong class="font-weight-bold">
                    Personal Information:{" "}
                  </strong>
                  {astronaut.personal_data}
                </p>
                <a href="/"></a>
              </div>
            </div>
            <div class="row">
              <div class="col col-sm-12">
                <p>
                  <strong class="font-weight-bold">Career Information: </strong>
                  {astronaut.description}
                </p>
                <p>
                  <strong class="font-weight-bold">Service: </strong>
                  {astronaut.service}
                </p>
                <p>
                  <strong class="font-weight-bold">
                    Days Spent In Space:{" "}
                  </strong>
                  {astronaut.days_spent_in_space}
                </p>
                <p>
                  <strong class="font-weight-bold">Nationality: </strong>
                  {category}
                </p>
                <hr class="hr_style" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailAstronautComponent;

// export default class DetailAstronautComponent extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.match.params.id);
//     this.state = {
//       id: this.props.match.params.id,
//       astronaut: {},
//       image: "",
//       category: "",
//     };
//     // console.log(this.props.match.params.id);
//   }

//   componentDidMount() {
//     AstronautsServices.getAstronautById(this.state.id).then((res) => {
//       this.setState({
//         astronaut: res.data,
//         image: require("../images/" + res.data.image).default,
//         category: res.data.category.name,
//       });
//       console.log(this.state.astronaut);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div class="row">
//           <section class="list">
//             <div class="container">
//               <h1 class="mt-4">Astronaut: {this.state.astronaut.name}</h1>
//               <hr class="hr_style" />

//               <div class="row">
//                 <div class="col col-sm-4">
//                   <h2 class="mt-2">{this.state.astronaut.name}</h2>
//                   <img
//                     class="astronaut_image"
//                     src={this.state.image}
//                     alt={`Astronaut ${this.state.astronaut.name}`}
//                   />
//                 </div>
//                 <div class="col col-sm-8">
//                   <p class="lead lead_in_list">
//                     <strong class="font-weight-bold">
//                       Personal Information:{" "}
//                     </strong>
//                     {this.state.astronaut.personal_data}
//                   </p>
//                   <a href="/"></a>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col col-sm-12">
//                   <p>
//                     <strong class="font-weight-bold">
//                       Career Information:{" "}
//                     </strong>
//                     {this.state.astronaut.description}
//                   </p>
//                   <p>
//                     <strong class="font-weight-bold">Service: </strong>
//                     {this.state.astronaut.service}
//                   </p>
//                   <p>
//                     <strong class="font-weight-bold">
//                       Days Spent In Space:{" "}
//                     </strong>
//                     {this.state.astronaut.days_spent_in_space}
//                   </p>
//                   <p>
//                     <strong class="font-weight-bold">Nationality: </strong>
//                     {this.state.category}
//                   </p>
//                   <hr class="hr_style" />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }
