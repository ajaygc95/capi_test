import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import InfoSection from "../../InfoSection/InfoSection";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
