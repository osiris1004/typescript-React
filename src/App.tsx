import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Exo } from "./components/Exos";
import { Home, Routing } from "./components/Routing";
function App() {
  return (
    <div className="App">
      {/* <Exo/> */}

      <Routing>
        <div>
        
        </div>
      </Routing>
    </div>
  );
}

export default App;

//<Link to="/List">Link</Link>