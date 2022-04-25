import { AiFillGithub } from "react-icons/ai";

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
      <div className={["project-container", className].join(" ")}>
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-xl">{subTitle}</h2>
        <h2 className="text-xl">{skillsUsed}</h2>
        <div className="mt-2">{githubButton}</div>
        <
        <ul className="pl-6 mt-3 list-disc">
          {description.map((bulletPoint, i) => {
            return <li key={i}>{bulletPoint}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Project;
