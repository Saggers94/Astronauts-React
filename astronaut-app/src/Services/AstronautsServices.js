import axios from "axios";

const ASTRONAUT_BASE_URL = "http://localhost:9090/api/v1/astronauts";

class AstronautsServices {
  getAstronauts() {
    return axios.get(ASTRONAUT_BASE_URL);
  }
}

export default new AstronautsServices();
