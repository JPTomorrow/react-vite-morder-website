const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// express app
const app = express();
app.use(cors({ origin: "https://morrder.com" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CONTACT ME EMAIL - Morrder.com
const mailer = require("nodemailer");
const mailCreds = require("./creds/mailing-creds.json");

app.post("/morrder/contact_email", (req, res) => {
  const username = mailCreds["TO_EMAIL"];
  const password = mailCreds["PASSWORD"];

  const body = req.body;
  const name = body["name"];
  const fromEmail = body["email"];
  const message = body["message"];

  const passed = name && fromEmail && message;
  if (!passed) {
    res.status(404).send("Please provide a name, message, and email address");
    return;
  }

  let transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  const mailOptions = {
    from: username,
    to: username,
    subject: "email sent from morrder.com - sender: " + fromEmail,
    text: "FROM: " + name + "\n\n" + message,
  };

  let info = transporter.sendMail(mailOptions);
  res.status(200).send("Message sent");
});

// TEST IF API IS UP AND RUNNING
app.get("/api/isalive", (req, res) => {
  const message = "API is alive";
  res.send(message);
});

// SERVE API
app.listen(8085, () => console.log("listening on http://localhost:8085"));
