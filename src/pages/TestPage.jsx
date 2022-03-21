import styles from "@/pages/TestPage.module.css";
import IncrementCounter from "@/components/IncrementCounter";

export default function TestPage() {
  return (
    <div>
      <IncrementCounter className={styles.counter} />
    </div>
  );
}
