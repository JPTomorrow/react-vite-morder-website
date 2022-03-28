import styles from "@/components/SearchBar.module.css";
import { Fragment } from "react";

export default function SearchBar() {
  return (
    <Fragment>
      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search"
      />
    </Fragment>
  );
}
