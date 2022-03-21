import styles from "@/pages/HomePage.module.css";
import AnimatedContentContainer from "@/components/AnimatedContentContainer";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <div className={styles["content-wrapper"]}>
      <AnimatedContentContainer>
        {/* <Button>Test</Button> */}
      </AnimatedContentContainer>
    </div>
  );
}
