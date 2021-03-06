import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
