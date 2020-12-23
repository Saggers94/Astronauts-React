import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import AstronautComponent from "./components/AstronautComponent";
import DetailAstronautComponent from "./components/DetailAstronautComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/astronauts" exact>
              <AstronautComponent />
            </Route>
            <Route path="/astronauts/:id" exact>
              <DetailAstronautComponent />
            </Route>
            <Route path="/about" exact>
              <AboutComponent />
            </Route>
            <Route path="/contact" exact>
              <ContactComponent />
            </Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
