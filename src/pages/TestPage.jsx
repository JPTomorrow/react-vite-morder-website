import styles from "@/pages/TestPage.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(45);

  function increment() {
    setCount(count + 1);
    setRotation(rotation + 360);
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>TestPage</h2>
      <div id={styles["motion-outer"]}>
        <motion.div
          id={styles["inner-spin-square"]}
          animate={{ rotate: rotation }}
          transition={{ duration: 0.5 }}
        />

        <div id={styles["count"]}>
          <p>{count}</p>
        </div>
      </div>

      <div id={styles["btn-container"]}>
        <button id={styles["increment-btn"]} onClick={() => increment()}>
          increment
        </button>
      </div>
    </main>
  );
}
