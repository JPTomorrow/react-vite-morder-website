import RoundedSeparator from "@/components/RoundedSeparator";
import StarHeader from "@/components/StarHeader";
import Button from "@/components/Button";

import mailer from "nodemailer";
import creds from "@/creds/mailing-creds.json";

const SendMail = () => {
  module.exports = async function (context, req) {
    // this is being read as a value from the configuraiton
    // key: values in azure on the static web app
    const username = creds["USERNAME"];
    const password = creds["PASSWORD"];

    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: username,
        pass: password,
      },
    });

    let info = await transporter.sendMail({
      from: username,
      to: username + ", safetyonboarding@marathonelectrical.com",
      subject: req.body.subject,
      html: req.body.message, // html body
    });

    console.log("Message sent: %s", info.messageId);
  };
};

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
          <Button className="float-left" onClick={() => SendMail()}>
            Submit
          </Button>
        </div>
      </div>

      <RoundedSeparator className="fill-gray-900" />
    </div>
  );
}

export default ContactPage;
