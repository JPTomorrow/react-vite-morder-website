import AboutPage from "@/pages/AboutPage";
import LandingPage from "@/pages/LandingPage";
import ScrollLink from "@/components/ScrollLink";
import { useRef } from "react";

import { GoArchive } from "react-icons/go";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

export default function App() {
  const landingRef = useRef();
  const newsRef = useRef();
  const ScrollToPage = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <div className="nav">
        <ScrollLink
          onClick={() => ScrollToPage(landingRef)}
          icon={<AiOutlineHome size="24" />}
          tooltip="Home"
        />
        <ScrollLink
          onClick={() => ScrollToPage(newsRef)}
          icon={<BsPerson size="24" />}
          tooltip="About"
        />
        <ScrollLink icon={<GoArchive size="24" />} tooltip="Projects" />
        <ScrollLink icon={<AiOutlineMail size="24" />} tooltip="Contact Me" />
      </div>
      <LandingPage scrollRef={landingRef} />
      <AboutPage scrollRef={newsRef} />
    </div>
  );
}
