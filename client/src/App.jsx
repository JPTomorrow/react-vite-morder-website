import "@/App.css";
import { Outlet, Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

export default function App() {
  return (
    <div className="bg-white">
      <div className="top-0 left-0 absolute mx-5 my-5">
        <NavLink to="/test_page">Test Page</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
