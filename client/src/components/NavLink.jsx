import { Link } from "react-router-dom";

function NavLink({ to, icon }) {
  return (
    <>
      <Link className="nav-link" to={to}>
        {icon}
      </Link>
    </>
  );
}

export default NavLink;
