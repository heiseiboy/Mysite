import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  page2: {
    width: "100%",
    height: "100vh",

    backgroundColor: "#d2dae2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.page2}>
      <h2>Secondary</h2>
    </div>
  );
};

export default Home;
