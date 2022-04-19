import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";

import newsEntries from "@/data/news-entries.json";

const AnimatedText = ({ children }) => {
  return (
    <div className="text-white text-center text-5xl font-light">{children}</div>
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
          <AnimatedText>Justin Morrow</AnimatedText>
          <p className="text-white text-center text-xl font-light w-[50%] mt-5">
            {quote_lines[0]}
            <br />
            {quote_lines[1]}
            <br />
            {quote_lines[2]}
          </p>
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
