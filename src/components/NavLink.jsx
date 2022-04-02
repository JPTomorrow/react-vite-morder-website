import styles from "@/components/NavLink.module.css";
import { Link } from "react-router-dom";

export default function NavLink(props, { to, className }) {
  return (
    <>
      <Link className={[style["nav-link"], className]} to={to} />
    </>
  );
}
