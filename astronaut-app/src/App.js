import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import AstronautComponent from "./components/AstronautComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/home" exact component={HomeComponent}></Route>
            <Route
              path="/astronauts"
              exact
              component={AstronautComponent}
            ></Route>
            {/* <Route path="/about" exact component={AboutComponent}></Route> */}
            {/* <Route path="/contact" exact component={ContactComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
