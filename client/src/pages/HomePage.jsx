import styles from "@/pages/HomePage.module.css";
import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";

import newsEntries from "@/data/news-entries.json";

export default function HomePage() {
  const updateSearch = (searchVal) => {
    console.log(searchVal);
    if (searchVal === "") return;
  };

  return (
    <>
      {/* <SearchBar className={styles["search-bar"]} onChange={updateSearch} /> */}
      <div className="bg-homepage-bg-1 bg-top bg-no-repeat bg-cover h-screen w-full drop-shadow-xl border-b-2 border-b-gray-800">
        <div className="flex justify-center place-items-center h-screen">
          <h1 className="text-white text-3xl font-light">Justin Morrow</h1>
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
