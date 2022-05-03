import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";
import Button from "@/components/Button";
import { useRef } from "react";

// import mailer from "nodemailer";
import creds from "@/creds/mailing-creds.json";

// const SendMail = (fromEmail, body) => {
//   if (fromEmail === "" || body === "") return;

//   const username = creds["TO_EMAIL"];
//   const password = creds["PASSWORD"];

//   let transporter = mailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: username,
//       pass: password,
//     },
//   });

//   const mailOptions = {
//     from: username,
//     to: username,
//     subject: "email sent from morrder.com from: " + fromEmail,
//     text: "FROM: " + fromEmail + "\n" + body,
//     // html: req.body.message, // html body
//   };

//   let info = transporter.sendMail(mailOptions);
//   console.log("Message sent: %s", info.messageId);
// };

// SendMail(email, makeBody(name, message))

const makeBody = (name, message) => {
  return name + "\n\n" + message;
};

function ContactPage(props) {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

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
          <Button className="float-left" onClick={() => alert("sending mail")}>
            Submit
          </Button>
        </div>
      </div>

      <RoundedSeparator className="fill-gray-900" />
    </div>
  );
}

export default ContactPage;
