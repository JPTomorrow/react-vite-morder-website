import "@/App.css";
import { Outlet, Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

import { GoArchive } from "react-icons/go";

export default function App() {
  return (
    <div className="bg-white">
      <div className="flex justify-end top-0 left-0 fixed z-[999] px-5 py-2 h-auto w-screen">
        <NavLink to="/test_page" icon={<GoArchive size="24" />} />
        <NavLink to="/test_page" />
      </div>
      <Outlet />
    </div>
  );
}
