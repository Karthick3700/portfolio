import { Fragment } from "react";
import Banner from "./components/Banner";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Education />
      <Skills />
      <Project />
    </Fragment>
  );
};

export default Home;
