import { AiFillGithub } from "react-icons/ai";
import { FaYenSign } from "react-icons/fa";

const animContainers = () => {
  return <div className="absolute"></div>;
};

function Project({
  className,
  title,
  subTitle,
  skillsUsed,
  description,
  image,
  githubLink,
  siteLink,
}) {
  const githubButton = githubLink ? (
    <a href={githubLink}>
      <AiFillGithub size={48} />
    </a>
  ) : null;

  return (
    <>
      <div className={["project-container relative", className].join(" ")}>
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-xl">{subTitle}</h2>
        <h2 className="text-xl">{skillsUsed}</h2>
        <div className="mt-2">{githubButton}</div>

        <ul className="pl-6 mt-3 list-disc">
          {description.map((bulletPoint, i) => {
            return <li key={i}>{bulletPoint}</li>;
          })}
        </ul>
        <div className="absolute z-[-10] w-full h-full top-0 left-0 bg-gradient-to-r from-gray-700  via-gray-700 to-transparent" />
        {image ? (
          <img className="absolute z-[-15] top-0 right-0 h-full" src={image} />
        ) : null}
      </div>
    </>
  );
}

export default Project;
