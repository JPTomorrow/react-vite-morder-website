import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";
import Button from "@/components/Button";
function ContactPage(props) {
  return (
    <div
      ref={props.scrollRef}
      className="relative text-center bg-gray-900 pb-10 h-full border-t-2"
    >
      <StarHeader className="pt-20">Contact Me</StarHeader>
      <div className="flex flex-col mt-[75px]">
        <input placeholder="Name" className="contact-input" />
        <input placeholder="Email" className="mt-[25px] contact-input" />
        <textarea placeholder="Message" className="mt-[25px] contact-input" />
        <div className="mt-[5px] w-[400px] mx-auto">
          <Button
            className="float-left"
            onClick={() => alert("Thank you for reaching out")}
          >
            Submit
          </Button>
        </div>
      </div>

      <RoundedSeparator className="fill-gray-900" />
    </div>
  );
}

export default ContactPage;
