import React from "react";
import HomeHero from "../sub-components/home/HomeHero";
import HomeLayout from "../sub-components/home/HomeLayout";
// import Navigation from "../sub-components/home/Navigation";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeLayout />
      {/* <Navigation /> */}
    </div>
  );
}

export default Home;
