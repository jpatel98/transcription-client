import React, { Fragment } from "react";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";


const Home = () => (
  <Fragment>
    <Hero/>
    <hr />
    <HomeContent/>
  </Fragment>
);

export default Home;