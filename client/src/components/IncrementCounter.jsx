import styles from "@/components/IncrementCounter.module.css";
import { useState, Fragment } from "react";
import { motion } from "framer-motion";

function IncrementCounter({ className }) {
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(45);

  function increment() {
    setCount(count + 1);
    setRotation(rotation + 360);
  }

  return (
    <Fragment>
      <div className={(styles["motion-outer"], className)}>
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
          <p>Increment</p>
        </button>
      </div>
    </Fragment>
  );
}

export default IncrementCounter;
