import { Link } from "react-router-dom";

function NavLink({ to, icon, tooltip = "tooltip" }) {
  return (
    <>
      <Link className="nav-link group" to={to}>
        {icon}
        <span className="nav-link-tooltip group-hover:scale-100">
          {tooltip}
        </span>
      </Link>
    </>
  );
}

export default NavLink;
