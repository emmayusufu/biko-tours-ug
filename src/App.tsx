import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/home";
import TourDetails from "./pages/tours/tour-details";
import Tours from "./pages/tours/tours";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./page-sections/footer/footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact path="/tours">
          <Tours />
        </Route>
        <Route path="/tours/:name">
          <TourDetails />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
