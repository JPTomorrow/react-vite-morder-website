import WaveText from "@/components/WaveText";
import { BsChevronDoubleDown as ChevronDown } from "react-icons/bs";

import Particles from "react-tsparticles";
import particleOptions from "@/data/tsparticles-bg-config.json";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <Particles
      className="absolute top-0 left-0 h-full"
      options={particleOptions}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

const quote_lines = [
  "Knowledge must continually be renewed...",
  "It resembles a statue of marble...",
  "threatened by the shiftinge sands",
];

function LandingPage(props) {
  return (
    <div className="space-bg" ref={props.scrollRef}>
      <div className="homepage-banner">
        <WaveText
          startDelay={0.5}
          startHidden={true}
          loop={false}
          className="banner-name-text"
        >
          Justin Morrow
        </WaveText>
        <WaveText
          startDelay={0.8}
          startHidden={true}
          loop={false}
          className="banner-name-text text-xl"
        >
          Full Stack Developer
        </WaveText>
        <WaveText
          startDelay={2.0}
          startHidden={true}
          className="banner-quote-text mt-5"
        >
          {quote_lines[0]}
        </WaveText>
        <WaveText
          startDelay={2.5}
          startHidden={true}
          className="banner-quote-text"
        >
          {quote_lines[1]}
        </WaveText>
        <WaveText
          startDelay={3.0}
          startHidden={true}
          className="banner-quote-text"
        >
          {quote_lines[2]}
        </WaveText>
      </div>
      {/* <div className="flex flex-col items-center justify-center w-full absolute bottom-[5px]">
        <p className="text-white opacity-30">Blog</p>
        <ChevronDown
          className=" text-white opacity-30"
          style={{ transform: "scale(2.0, 0.7)" }}
          size="40"
        />
      </div> */}
      <ParticleBg />
    </div>
  );
}

export default LandingPage;
