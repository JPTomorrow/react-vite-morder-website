// import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import newsEntries from "@/data/news-entries.json";

import SkillBadge from "@/components/SkillBadge";
import { DiCss3 } from "react-icons/di";

const updateSearch = (searchVal) => {
  console.log(searchVal);
  if (searchVal === "") return;
};

const skillBadgeStyle = {
  width: "80px",
  height: "80px",
};

const skillBadges = {
  CSS: <DiCss3 style={skillBadgeStyle} />,
};

function AboutPage(props) {
  return (
    <div className=" bg-gray-900 pb-10 h-full" ref={props.scrollRef}>
      <h1 className="text-white text-3xl pt-20 w-full text-center">About</h1>
      <div className="mission-statement">
        All work and no play makes Jack a dull boy. All work and no play makes
        Jack a dull boy. All work and no play makes Jack a dull boy. All work
        and no play makes Jack a dull boy. All work and no play makes Jack a
        dull boy.
      </div>
      <div className="skill-badges">
        {Object.entries(skillBadges).map(([skill, icon]) => {
          return <SkillBadge key={skill} icon={icon} iconText={skill} />;
        })}
        {/* {Object.values(newsEntries).map((entry, index) => {
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
        })} */}
      </div>
      {/* <SearchBar className={styles["search-bar"]} onChange={updateSearch} /> */}
    </div>
  );
}

export default AboutPage;
