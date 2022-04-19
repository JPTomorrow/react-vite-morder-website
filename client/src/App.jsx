import "@/App.css";
import { Outlet, Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

import { GoArchive } from "react-icons/go";

export default function App() {
  return (
    <div className="bg-white">
      <div className="nav">
        <NavLink
          to="/test_page"
          icon={<GoArchive size="24" />}
          tooltip="GitHub"
        />
        <NavLink to="/test_page" />
      </div>
      <Outlet />
    </div>
  );
}
