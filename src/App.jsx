import { useState } from "react";
import logo from "@/logo.svg";
import "@/App.css";

import { Outlet, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Morder Industries!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/test_page">TestPage</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
