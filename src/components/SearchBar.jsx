import styles from "@/components/SearchBar.module.css";
import { Fragment } from "react";
import { TextInput } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ placeholder }) {
  return (
    <Fragment>
      <TextInput
        className={styles["search-bar"]}
        placeholder="Search"
        icon={<FaSearch />}
      />
    </Fragment>
  );
}
