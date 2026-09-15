import HeroSection from "../components/home/HeroSection";
import WhatToday from "../components/home/WhatToday";
import IdeaTransform from "../components/home/IdeaTransform";
import BigIdeas from "../components/home/BigIdeas";
import JourneySteps from "../components/home/JourneySteps";
import Highlights from "../components/home/Highlights";
import InventionLab from "../components/home/InventionLab";
import IdeaGenerator from "../components/home/IdeaGenerator";
import Countdown from "../components/home/Countdown";
import AboutARMS from "../components/home/AboutARMS";
import PosterSection from "../components/home/PosterSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatToday />
      <IdeaTransform />
      <BigIdeas />
      <JourneySteps />
      <Highlights />
      <InventionLab />
      <IdeaGenerator />
      <Countdown />
      <AboutARMS />
      <PosterSection />
      <FinalCTA />
    </>
  );
}