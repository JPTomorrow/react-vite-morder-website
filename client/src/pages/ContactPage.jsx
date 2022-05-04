import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";
import Button from "@/components/Button";
import { useRef } from "react";

function ContactPage(props) {
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendMail = () => {
    // fetch POST request endpoint /morrder/contact_email
    const bodyContents = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };

    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyContents),
    };

    fetch("http://localhost:8085/morrder/contact_email", postOptions)
      .then((res) => {
        res.text().then((text) => {
          console.log(`Response: ${res.status} -> ${text}`);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      ref={props.scrollRef}
      className="relative text-center bg-gray-900 pb-10 h-full border-t-2"
    >
      <StarHeader className="pt-20">Contact Me</StarHeader>
      <div className="flex flex-col mt-[75px]">
        <input ref={name} placeholder="Name" className="contact-input" />
        <input
          ref={email}
          placeholder="Email"
          className="mt-[25px] contact-input"
        />
        <textarea
          ref={message}
          placeholder="Message"
          className="mt-[25px] contact-input"
        />
        <div className="mt-[5px] w-[400px] mx-auto">
          <Button className="float-left" onClick={() => sendMail()}>
            Submit
          </Button>
        </div>
      </div>

      <RoundedSeparator className="fill-gray-900" />
    </div>
  );
}

export default ContactPage;
