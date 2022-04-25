import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";

function ProjectsPage(props) {
  return (
    <div
      ref={props.scrollRef}
      className="relative text-center bg-gray-800 pb-10 h-full border-t-2"
    >
      <StarHeader className="pt-20">Projects</StarHeader>
      <RoundedSeparator className="fill-gray-800" />
    </div>
  );
}

export default ProjectsPage;
