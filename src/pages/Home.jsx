import HeroSection from "../components/home/HeroSection";
import CountdownSection from "../components/home/CountdownSection";
import WhatToday from "../components/home/WhatToday";
import JourneySteps from "../components/home/JourneySteps";
import Highlights from "../components/home/Highlights";
import AboutARMS from "../components/home/AboutARMS";
import FinalCTA from "../components/home/FinalCTA";
import BrochureSection from "../components/home/BrochureSection";
export default function Home() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="countdown">
        <CountdownSection />
      </div>
      <div id="overview">
        <WhatToday />
      </div>
      <div id="roadmap">
        <JourneySteps />
      </div>
      <div id="highlights">
        <Highlights />
      </div>
      <div id="about">
        <AboutARMS />
      </div>
      <div id="brohure">
        <BrochureSection />
      </div>
      <div id="register">
        <FinalCTA />
      </div>
    </>
  );
}