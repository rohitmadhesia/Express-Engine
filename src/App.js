import React from "react";
import Engine from "./Engine";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1>Expression Engine</h1>
      <Engine />
    </div>
  );
};

export default App;
