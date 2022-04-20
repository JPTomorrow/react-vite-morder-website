import "@/App.css";
import { Outlet, Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

import { GoArchive } from "react-icons/go";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

export default function App() {
  return (
    <>
      <div className="nav">
        <NavLink to="/" icon={<AiOutlineHome size="24" />} tooltip="Home" />
        <NavLink
          to="/test_page"
          icon={<GoArchive size="24" />}
          tooltip="GitHub"
        />
        <NavLink
          to="/contact_us"
          icon={<AiOutlineMail size="24" />}
          tooltip="Contact Me"
        />
      </div>
      <Outlet />
    </>
  );
}



