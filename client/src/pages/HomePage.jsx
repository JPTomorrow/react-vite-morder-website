import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import newsEntries from "@/data/news-entries.json";

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
            className="inline-block text-white text-center text-5xl font-light"
          >
            Justin Morrow
          </WaveText>
          <WaveText
            startDelay={2.0}
            startHidden={true}
            className="text-white text-center text-xl font-light w-[50%] mt-5"
          >
            {quote_lines[0]}
          </WaveText>
          <WaveText
            startDelay={2.0}
            startHidden={true}
            className="text-white text-center text-xl font-light w-[50%]"
          >
            {quote_lines[1]}
          </WaveText>
          <WaveText
            startDelay={2.0}
            startHidden={true}
            className="text-white text-center text-xl font-light w-[50%]"
          >
            {quote_lines[2]}
          </WaveText>
        </div>
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
