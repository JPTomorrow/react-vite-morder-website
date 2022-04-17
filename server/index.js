const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// get credentials and redirect URLS
const creds_json = require("./creds/creds.json");
const e = require("express");
//const redirect_urls = require("./creds/redirect_url.json");

console.log("UN: " + creds_json["DATABASE_UN"]);
console.log("PW: " + creds_json["DATABASE_PW"]);
console.log("DB NAME: " + creds_json["DATABASE_NAME"]);

const db = mysql.createPool({
  host: "localhost",
  port: "8090",
  user: creds_json["DATABASE_UN"],
  password: creds_json["DATABASE_PW"],
  database: creds_json["DATABASE_NAME"],
});

// START OF APP ENDPOINTS

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(8085, () => console.log("listening on http://localhost:8085"));
