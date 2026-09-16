import HeroSection from "../components/home/HeroSection";
import CountdownSection from "../components/home/CountdownSection";
import WhatToday from "../components/home/WhatToday";
import BigIdeas from "../components/home/BigIdeas";
import JourneySteps from "../components/home/JourneySteps";
import Highlights from "../components/home/Highlights";
import AboutARMS from "../components/home/AboutARMS";
import PosterSection from "../components/home/PosterSection";
import FinalCTA from "../components/home/FinalCTA";

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
      <div id="domains">
        <BigIdeas />
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
      <div id="poster">
        <PosterSection />
      </div>
      <div id="register">
        <FinalCTA />
      </div>
    </>
  );
}