import styles from "@/pages/TestPage.module.css";
import IncrementCounter from "@/components/IncrementCounter";
import AnimatedContentContainer from "@/components/AnimatedContentContainer";

export default function TestPage() {
  return (
    <div>
      <AnimatedContentContainer />
      {/* <IncrementCounter className={styles.counter} /> */}
    </div>
  );
}
