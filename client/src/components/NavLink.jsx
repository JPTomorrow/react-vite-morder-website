import styles from "@/components/NavLink.module.css";
import { Link } from "react-router-dom";

function NavLink({ children, to, className }) {
  return (
    <>
      <Link className={[styles["nav-link"], className]} to={to}>
        {children}
      </Link>
    </>
  );
}

export default NavLink;
