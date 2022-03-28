import styles from "@/pages/HomePage.module.css";
import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div className={styles["content-wrapper"]}>
      <SearchBar />
      <NewsEntry
        header="Title"
        content="Content"
        buttons={
          <Button onClick={() => console.log("clicked")}>
            Long Button Name
          </Button>
        }
      />
    </div>
  );
}
