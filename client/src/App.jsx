import "@/App.css";
import styles from "@/App.module.css";
import { Outlet, Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

export default function App() {
  return (
    <>
      <div className={styles["nav-link-container"]}>
        <NavLink className={styles["nav-link"]} to="/test_page">
          Test Page
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
