import HeroSection from "../components/home/HeroSection";
import WhatToday from "../components/home/WhatToday";
import BigIdeas from "../components/home/BigIdeas";
import JourneySteps from "../components/home/JourneySteps";
import Highlights from "../components/home/Highlights";
import Countdown from "../components/home/Countdown";
import AboutARMS from "../components/home/AboutARMS";
import PosterSection from "../components/home/PosterSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatToday />
      <BigIdeas />
      <JourneySteps />
      <Highlights />
      <Countdown />
      <AboutARMS />
      <PosterSection />
      <FinalCTA />
    </>
  );
}