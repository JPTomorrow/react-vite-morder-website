import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";
import Project from "@/components/Project";

import TestImg from "@/assets/homepage-bg-1.jpg";

const proffesionalProjects = {
  bomGenerator: {
    title: "Test Project",
    subTitle: "Test Subtitle",
    skillsUsed: "React, Node, Express, MongoDB",
    description: [
      "This is a test project",
      "This is a test project",
      "This is a test project",
    ],
    image: <img src={TestImg} />,
    githubLink:
      "https://github.com/JPTomorrow/revit-bill-of-materials-generator",
  },
  bomGenerator2: {
    title: "Test Project",
    subTitle: "Test Subtitle",
    skillsUsed: "React, Node, Express, MongoDB",
    description: [
      "This is a test project",
      "This is a test project",
      "This is a test project",
    ],
    image: <img src={TestImg} />,
    githubLink:
      "https://github.com/JPTomorrow/revit-bill-of-materials-generator",
  },
};

function ProjectsPage(props) {
  return (
    <div
      ref={props.scrollRef}
      className="relative text-center bg-gray-800 pb-10 h-full border-t-2"
    >
      <StarHeader className="pt-20">Professional Projects</StarHeader>
      <div className="flex flex-col items-center gap-2 mt-[75px] mb-[100px]"></div>
      <StarHeader className="pt-20">Personal Projects</StarHeader>
      <div className="flex flex-col items-center gap-2 mt-[75px] mb-[100px]">
        {Object.values(proffesionalProjects).map((project, i) => {
          <Project
            key={i}
            title={project.title}
            subTitle={project.subTitle}
            skillsUsed={project.skillsUsed}
            description={project.description}
            githubLink={project.githubLink}
          />;
        })}
      </div>
      <RoundedSeparator className="fill-gray-800" />
    </div>
  );
}

export default ProjectsPage;
