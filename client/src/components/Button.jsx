import styles from "@/components/Button.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  yOffsetSelf: {
    translateY: [0, -2],
    transition: {
      duration: 0.1,
    },
  },
  yOffsetSelfReset: {
    translateY: [0, 0],
    transition: {
      duration: 0.05,
    },
  },
};

const backgroundVariants = {
  initial: {
    scaleX: 0,
  },
  enter: {
    scaleX: 1,
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
  exit: {
    scaleX: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
  pushBgToBack: {
    zIndex: 1,
  },
};

const txtVariants = {
  changeColor: {
    color: "rgba(255, 255, 255, 1)",
  },
  bringTextToFront: {
    zIndex: 9999,
  },
};

function Button({ className, onClick, uppercase, children }) {
  return (
    <motion.button
      whileHover={[
        "enter",
        "bringTextToFront",
        "pushBgToBack",
        "changeColor",
        "yOffsetSelf",
      ]}
      whileTap="yOffsetSelfReset"
      initial="initial"
      exit="exit"
      className={["custom-button", className].join(" ")}
      variants={containerVariants}
      onClick={onClick}
    >
      <motion.p variants={txtVariants} className={styles["text"]}>
        {uppercase ? children.toUpperCase() : children}
      </motion.p>
      <motion.div className={styles["bg-anim"]} variants={backgroundVariants}>
        <p className={styles["spacer"]}>&nbsp;</p>
      </motion.div>
      <div className={styles["corner-square"]} />
    </motion.button>
  );
}

export default Button;
