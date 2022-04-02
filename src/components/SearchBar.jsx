import styles from "@/components/SearchBar.module.css";
import { TextInput } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({
  onChange,
  label,
  className,
  error,
  placeholder,
}) {
  //const [value, setValue] = useState("");
  return (
    <>
      <TextInput
        className={[styles["search-bar"], className]}
        placeholder={placeholder === null ? "Search" : placeholder}
        icon={<FaSearch />}
        radius="md"
        error={error}
        label={label}
        onChange={onChange}
      />
    </>
  );
}
