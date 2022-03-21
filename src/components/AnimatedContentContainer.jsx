import styles from "@/components/AnimatedContentContainer.module.css";
import { useState, Fragment } from "react";
import Typist from "react-typist";

export default function AnimatedContentContainer({ className }) {
  return (
    <div className={styles["container"]}>
      <Typist>Type This</Typist>
    </div>
  );
}
