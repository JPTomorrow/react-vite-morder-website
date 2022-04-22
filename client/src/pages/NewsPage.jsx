import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import newsEntries from "@/data/news-entries.json";

const updateSearch = (searchVal) => {
  console.log(searchVal);
  if (searchVal === "") return;
};

function NewsPage(props) {
  return (
    <div className="bg-gray-900 pb-10 h-screen" ref={props.scrollRef}>
      <h1 className="text-white text-3xl pt-20 w-full text-center">Blog</h1>
      <div className="no-scrollbar grid grid-cols-2 gap-5 m-10 max-h-[85%] overflow-y-auto scroll-smooth">
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
      {/* <SearchBar className={styles["search-bar"]} onChange={updateSearch} /> */}
    </div>
  );
}

export default NewsPage;
