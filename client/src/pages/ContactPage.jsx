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
        <input placeholder="First Name" className="contact-input" />
        <input placeholder="Last Name" className="mt-[25px] contact-input" />
        <textarea placeholder="Message" className="mt-[25px] contact-input" />
      </div>
      <Button>Submit</Button>
      <RoundedSeparator className="fill-gray-900" />
    </div>
  );
}

export default ContactPage;
