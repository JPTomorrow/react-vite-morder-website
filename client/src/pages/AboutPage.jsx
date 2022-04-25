import SkillBadges from "@/components/SkillBadges";
import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";

import Particles from "react-tsparticles";
import particleOptions from "@/data/tsparticles-bg-config.json";
import { loadFull } from "tsparticles";

const updateSearch = (searchVal) => {
  console.log(searchVal);
  if (searchVal === "") return;
};

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full"
      options={particleOptions}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

function AboutPage(props) {
  return (
    <div
      className="relative text-center bg-gray-900 pb-10 h-full"
      ref={props.scrollRef}
    >
      <StarHeader className="pt-20">About Me</StarHeader>
      <div className="mission-statement">
        Software Developer with greater than 4 years of hands-on experience
        designing and integrating software to meet a client's needs who is a
        self-taught professional out of passion for programming. Currently
        seeking a role to expand knowledge of back-end technologies, and
        testing.
      </div>
      <StarHeader>Skills</StarHeader>
      <div className="my-[75px]">
        <SkillBadges />
      </div>
      <RoundedSeparator className="fill-gray-900" />
      <ParticleBg />
    </div>
  );
}

export default AboutPage;
