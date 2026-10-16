import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListComponent from "./components/ListComponet/ListComponent";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ListComponent />
    </div>
  );
};

export default App;
