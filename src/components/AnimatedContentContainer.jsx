import styles from "@/components/AnimatedContentContainer.module.css";
import Typist from "react-typist";

export default function AnimatedContentContainer({ className }) {
  return (
    <div className={(styles["container"], className)}>
      <Typist>Type This</Typist>
    </div>
  );
}
