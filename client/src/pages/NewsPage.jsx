import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import newsEntries from "@/data/news-entries.json";

const updateSearch = (searchVal) => {
  console.log(searchVal);
  if (searchVal === "") return;
};

function NewsPage() {
  return (
    <div className="bg-gray-900 pb-10 pl-10 h-screen">
      <h1 className="text-white text-3xl pb-5 pt-5">News</h1>
      {/* <SearchBar className={styles["search-bar"]} onChange={updateSearch} /> */}
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
  );
}

export default NewsPage;
