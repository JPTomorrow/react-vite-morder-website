const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// express app
const app = express();
app.use(cors({ origin: "https://morrder.com" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
// get credentials and redirect URLS
//const redirect_urls = require("./creds/redirect_url.json");
const creds_json = require("./creds/creds.json");

console.log("UN: " + creds_json["DATABASE_UN"]);
console.log("PW: " + creds_json["DATABASE_PW"]);
console.log("DB NAME: " + creds_json["DATABASE_NAME"]);

// database creds
const db = mysql.createPool({
  host: "localhost",
  port: "8090",
  user: creds_json["DATABASE_UN"],
  password: creds_json["DATABASE_PW"],
  database: creds_json["DATABASE_NAME"],
});

// START OF APP ENDPOINTS

// INSERT API KEY
app.post("/api/keys/insert", (req, res) => {
  const name = req.body.name;
  const key = req.body.key;

  const sql_query = "INSERT INTO api_keys (name, description) VALUES (?, ?)";

  db.query(sql_query, [name, key], (err, result) => {
    if (err) throw err;
    res.send("Added API key");
  });
});

// SCRAPE A WEBSITE
const axios = require("axios");
const cherrio = require("cheerio");

app.get("/api/scrape_test", (req, res) => {
  const url = "https://www.foodnetwork.com/recipes/articles/50-homemade-sodas";
  axios.get(url).then((response) => {
    const $ = cherrio.load(response.data);
    const sodas = $("div.o-CustomRTE").text();
    res.send(sodas);
  });
});
*/

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
