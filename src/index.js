import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./Styles/style.css";
// import TopMenu from "./Components/TopMenu";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
// import SideMenu from "./Components/SideMenu";

ReactDOM.render(
  <React.StrictMode>
    <About />
    <Skills />
    {/* <TopMenu /> */}
    <Home />
    {/* <SideMenu /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
