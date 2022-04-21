import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import newsEntries from "@/data/news-entries.json";
import WaveText from "@/components/WaveText";
import { BsChevronDoubleDown as ChevronDown } from "react-icons/bs";

import Particles from "react-tsparticles";
import particleOptions from "@/data/tsparticles-bg-config.json";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      className="absolute top-0 left-0 h-full"
      options={particleOptions}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

function HomePage() {
  const updateSearch = (searchVal) => {
    console.log(searchVal);
    if (searchVal === "") return;
  };

  const quote_lines = [
    "Knowledge must continually be renewed by ceaseless effort...",
    "It resembles a statue of marble...",
    "continually threatened by the shifting sands",
  ];

  return (
    <>
      {/* <SearchBar className={styles["search-bar"]} onChange={updateSearch} /> */}
      <div className="space-bg">
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
        <div className="flex flex-col items-center justify-center w-full absolute bottom-[5px]">
          <p className="text-white opacity-20">Blog</p>
          <ChevronDown
            className=" text-white opacity-20"
            style={{ transform: "scale(2.0, 0.7)" }}
            size="40"
          />
        </div>
        <ParticleBg />
      </div>
      <div className="bg-gray-900 pb-10 pl-10">
        <h1 className="text-white text-3xl pb-5 pt-5">News</h1>
        {Object.values(newsEntries).map((entry, index) => {
          return (
            <NewsEntry
              className="mt-5"
              header={entry.name}
              content={entry.content}
              key={index}
              buttons={
                <Button onClick={() => console.log("clicked")}>
                  {entry.button_text}
                </Button>
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
