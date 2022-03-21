import styles from "@/components/AnimatedContentContainer.module.css";
import Typist from "react-typist";

export default function AnimatedContentContainer(props, { className }) {
  return (
    <div className={styles["container"]}>
      <Typist>
        All work and no play makes Rashad a dull boy. All work and no play makes
        Rashad a dull boy. All work and no play makes Rashad a dull boy. All
        work and no play makes Rashad a dull boy. All work and no play makes
        Rashad a dull boy. All work and no play makes Rashad a dull boy. All
        work and no play makes Rashad a dull boy. All work and no play makes
        Rashad a dull boy. All work and no play makes Rashad a dull boy. All
        work and no play makes Rashad a dull boy.
      </Typist>
      <div>{props.children}</div>
    </div>
  );
}
