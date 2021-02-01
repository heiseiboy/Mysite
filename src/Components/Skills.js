import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJsSquare,
  faReact,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";

function Skills() {
  // document.addEventListener("DOMContentLoaded", function () {
  //   let icons = document.querySelectorAll(".fas");
  //   for (let i = 0; i < fas.length; i++) {
  //     icons[i].addEventListener("mouseOver", function () {
  //       FontAwesomeIcon.appendChild("span").classList.add(".under-line");
  //     });
  //   }
  // });
  return (
    <div className="container" id="bg4">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <p className="skills">Skills</p>
        </Grid>

        <Grid item xs={4} className="info">
          <div className="lang" id="lang1">
            <h2>
              <u>Can be used</u>
            </h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHtml5} className="fas" id="fas1" />
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3Alt} className="fas" id="fas2" />
              </li>
              <li>
                <FontAwesomeIcon icon={faJsSquare} className="fas" id="fas3" />
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={4} className="compiler">
          <h2>
            <u>Can &nbsp;be &nbsp; used&nbsp; a little</u>
          </h2>
          <ul>
            <li id="compiler1">webpack</li>
            <li>babel</li>
          </ul>
        </Grid>
        <Grid item xs={4} className="next">
          <h2>
            <u>Next Study</u>
          </h2>
          <ul id="next-study">
            <li id="ns1">Next.js</li>
            <li id="ns2">Node.js</li>
            <li>Management</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
