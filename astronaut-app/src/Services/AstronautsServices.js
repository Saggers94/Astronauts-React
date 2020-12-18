import axios from "axios";

const ASTRONAUT_BASE_URL = "http://localhost:9090/api/v1/astronauts";

class AstronautsServices {
  getAstronauts() {
    return axios.get(ASTRONAUT_BASE_URL);
  }

  getAstronautById(id) {
    return axios.get(ASTRONAUT_BASE_URL + "/" + id);
  }
}

export default new AstronautsServices();
