import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [animeigens, setAnimeigens] = useState();
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

  return (
    <div className="container3">
      <section className="content1">
        <h1 id="mamo-web">Mamo's web</h1>
      </section>
      <section className="content2"></section>
    </div>
  );
}

export default About;
