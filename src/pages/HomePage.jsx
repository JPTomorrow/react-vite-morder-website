import styles from "@/pages/HomePage.module.css";
import NewsEntry from "@/components/NewsEntry";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <div className={styles["content-wrapper"]}>
      <NewsEntry>
        <h1>Title</h1>
        <p>Content</p>
      </NewsEntry>
      <Button>Test</Button>
    </div>
  );
}
