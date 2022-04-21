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
  const parallaxRef = useRef();

  return (
    <>
      <div className="nav">
        <ScrollLink
          onClick={() => parallaxRef.current.scrollTo(0)}
          icon={<AiOutlineHome size="24" />}
          tooltip="Home"
        />
        <ScrollLink
          onClick={() => parallaxRef.current.scrollTo(1)}
          icon={<BsBook size="24" />}
          tooltip="Blog"
        />
        <ScrollLink icon={<GoArchive size="24" />} tooltip="Projects" />
        <ScrollLink icon={<AiOutlineMail size="24" />} tooltip="Contact Me" />
      </div>
      <Parallax pages={2} ref={parallaxRef}>
        <ParallaxLayer>
          <LandingPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <NewsPage />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
