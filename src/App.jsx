import "@/App.css";
import { Outlet, Link } from "react-router-dom";

import ParticlesBg from "particles-bg";
import Button from "@/components/Button";

export default function App() {
  return (
    <div>
      <span>
        <h1>Morder Industries!</h1>
        <Link to="/test_page">TestPage</Link>
      </span>
      <Button>Click me!</Button>
      <Outlet />
      <ParticlesBg num={70} type="cobweb" color="#ffffff" bg={true} />
    </div>
  );
}
