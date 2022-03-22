import styles from "@/components/NewsEntry.module.css";
import Typist from "react-typist";
import React from "react";
import { findChildrenByTag } from "@/util/PropUtils";

export default function NewsEntry({ children, className }) {
  return (
    <div className={styles["container"]}>
      <Typist>{findChildrenByTag("h1", children)}</Typist>
      <Typist>{findChildrenByTag("p", children)}</Typist>
    </div>
  );
}
