import styles from "@/components/NewsEntry.module.css";
import Typist from "react-typist";
import React from "react";

export default function NewsEntry(props, { className }) {
  return (
    <div className={styles["container"]}>
      <Typist>{props.header}</Typist>
      <Typist>{props.content}</Typist>
      {props.buttons}
    </div>
  );
}
