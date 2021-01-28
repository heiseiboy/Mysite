import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#f7f1e3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "65%",
    height: "45%",
    borderRadius: "45px",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <h3>Third</h3>
      </div>
    </>
  );
};

export default About;
