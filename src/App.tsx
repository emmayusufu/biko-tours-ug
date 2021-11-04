import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/home";
import TourDetails from "./pages/tours/tour-details";
import Tours from "./pages/tours/tours";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact path="/tours">
          <Tours />
        </Route>
        <Route path="/tours/:id">
          <TourDetails />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
