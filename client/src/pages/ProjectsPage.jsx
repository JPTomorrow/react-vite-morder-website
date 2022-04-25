import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";

function ProjectsPage(props) {
  return (
    <div
      ref={props.scrollRef}
      className="relative text-center bg-gray-800 pb-10 h-full border-t-2"
    >
      <StarHeader className="pt-20">Projects</StarHeader>
      <div className="flex flex-col items-center gap-2 mt-[75px] mb-[100px]">
        <div className="w-[90%] bg-gray-600 h-[200px] rounded-3xl opacity-70" />
        <div className="w-[90%] bg-gray-600 h-[200px] rounded-3xl opacity-70" />
        <div className="w-[90%] bg-gray-600 h-[200px] rounded-3xl opacity-70" />
        <div className="w-[90%] bg-gray-600 h-[200px] rounded-3xl opacity-70" />
      </div>
      <RoundedSeparator className="fill-gray-800" />
    </div>
  );
}

export default ProjectsPage;
