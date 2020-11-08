import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";

function App() {
  useEffect(() => {
    console.log("Make an API call");
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
        <Search/>
    </div>
  );
}

export default App;