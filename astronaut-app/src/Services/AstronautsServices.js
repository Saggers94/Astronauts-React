import axios from "axios";

const ASTRONAUT_BASE_URL =
  "https://springastronautsboot.herokuapp.com/api/v1/astronauts/";

class AstronautsServices {
  getAstronauts() {
    return axios.get(ASTRONAUT_BASE_URL);
  }

  getAstronautById(id) {
    console.log(id);
    return axios.get(ASTRONAUT_BASE_URL + "/" + id);
  }
}

export default new AstronautsServices();

//After npm run build you just need to drag and drop build folder on netlify
