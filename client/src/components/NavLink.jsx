import styles from "@/components/NavLink.module.css";
import { Link } from "react-router-dom";

export default function NavLink({ children, to, className }) {
  return (
    <>
      <Link className={[styles["nav-link"], className]} to={to}>
        {children}
      </Link>
    </>
  );
}
