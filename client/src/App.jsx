import "@/App.css";
import NewsPage from "@/pages/NewsPage";
import LandingPage from "@/pages/LandingPage";
import ScrollLink from "@/components/ScrollLink";

import { GoArchive } from "react-icons/go";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export default function App() {
  const landingRef = useRef();
  const newsRef = useRef();
  const ScrollToPage = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div className="nav">
        <ScrollLink
          onClick={() => ScrollToPage(landingRef)}
          icon={<AiOutlineHome size="24" />}
          tooltip="Home"
        />
        <ScrollLink
          onClick={() => ScrollToPage(newsRef)}
          icon={<BsBook size="24" />}
          tooltip="Blog"
        />
        <ScrollLink icon={<GoArchive size="24" />} tooltip="Projects" />
        <ScrollLink icon={<AiOutlineMail size="24" />} tooltip="Contact Me" />
      </div>
      <LandingPage scrollRef={landingRef} />
      <NewsPage scrollRef={newsRef} />
    </>
  );
}
