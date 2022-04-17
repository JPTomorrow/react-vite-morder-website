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
    <div className={styles["content-wrapper"]}>
      <SearchBar className={styles["search-bar"]} onChange={updateSearch} />
      <div className={styles["news-entries"]}>
        {Object.values(newsEntries).map((entry, index) => {
          return (
            <NewsEntry
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
    </div>
  );
}
