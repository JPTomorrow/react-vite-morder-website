import styles from "@/components/SearchBar.module.css";
import { TextInput } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onChange, label, className, error, placeholder }) {
  const search = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <TextInput
        className={[styles["search-bar"], className]}
        placeholder={placeholder === null ? "Search" : placeholder}
        icon={<FaSearch />}
        radius="md"
        error={error}
        label={label}
        onChange={search}
      />
    </>
  );
}

export default SearchBar;
