import GuidelinesHero from "../components/guidelines/GuidelinesHero";
import TeamRequirements from "../components/guidelines/TeamRequirements";
// import WhatToBring from "../components/guidelines/WhatToBring";
import RulesAccordion from "../components/guidelines/RulesAccordion";
import JudgingCriteria from "../components/guidelines/JudgingCriteria";
import Timeline from "../components/guidelines/Timeline";
import FAQ from "../components/guidelines/FAQ";

export default function Guidelines() {
  return (
    <>
      <GuidelinesHero />
      <TeamRequirements />
      {/* <WhatToBring /> */}
      <RulesAccordion />
      <JudgingCriteria />
      <Timeline />
      <FAQ />
    </>
  );
}