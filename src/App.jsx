import "@/App.css";
import style from "@/App.module.css";
import { Outlet, Link } from "react-router-dom";

import ParticlesBg from "particles-bg";

export default function App() {
  return (
    <>
      <div className={style["nav-link-container"]}>
        <Link className={style["nav-link"]} to="/test_page">
          Test Page
        </Link>
      </div>
      <Outlet />
      <ParticlesBg num={70} type="cobweb" color="#ffffff" bg={true} />
    </>
  );
}
