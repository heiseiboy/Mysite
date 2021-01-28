import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJsSquare,
  faReact,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  document.addEventListener("DOMContentLoaded", function () {
    let icons = document.querySelectorAll(".fas");
    for (let i = 0; i < fas.length; i++) {
      icons[i].addEventListener("mouseOver", function () {
        FontAwesomeIcon.appendChild("span").classList.add(".under-line");
      });
    }
  });
  return (
    <div className="container">
      <section>
        <h1 className="skills">Skills</h1>
        <div className="content">
          <FontAwesomeIcon icon={faHtml5} className="fas" />
          <FontAwesomeIcon icon={faCss3Alt} className="fas" />
          <FontAwesomeIcon icon={faJsSquare} className="fas" />
          <FontAwesomeIcon icon={faReact} className="fas" />
        </div>
      </section>
    </div>
  );
}

export default Skills;
