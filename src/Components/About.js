import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [animeigens, setAnimeigens] = useState();
  const [menuIcon, setMenuIcon] = useState(false);
  // useEffect(() => {
  //   axios
  //     .get("https://animechanapi.xyz/api/quotes/random")
  //     .then((response) => setAnimeigens(response.data))
  //     .then(console.log(animeigens))
  //     .catch((error) => console.log(error));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://animechanapi.xyz/api/quotes/random");
      setAnimeigens(result);
      console.log(result.data);
    };
    fetchData();
  }, []);

  const nav = document.querySelector("nav");

  return (
    <div className="container3">
      <section className="content1">
        <h1 id="mamo-web">Mamo's web</h1>
        <FontAwesomeIcon
          icon={faBars}
          id="menu-icon"
          onClick={() => {
            nav.classList.toggle("open-menu");
            setMenuIcon(!menuIcon);
          }}
        />
      </section>
      <section className="content2"></section>

      <header>
        <nav>
          <ul
            onClick={() => {
              nav.classList.remove("open-menu");
            }}
          >
            <li>
              <a href="#">ホーム</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">実績紹介</a>
            </li>
            <li>
              <a href="#">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default About;
