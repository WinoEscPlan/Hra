import express from "express";
import { readFile, readFileSync } from "node:fs";
const app = express();
/* async
app.get("/api-warriors", function (req, res) {
  readFile("src/data/warriors.json", "utf-8", function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    try {
      const jsonData = JSON.parse(data);
      res.type("json").send(jsonData);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send("Error parsing JSON");
    }
  });
});
*/
// sync
app.get("/api-warriors", function (req, res) {
  try {
    const contents = readFileSync("src/data/warriors.json", "utf-8");
    const warriors = JSON.parse(contents);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.type("json").send(warriors);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error parsing JSON");
  }
});

app.post("/postRequest", function (req, res) {
  res.send("hello world - POST METHOD ");
});
app.listen(3000);
/*
fetch("http://localhost:3000/api-warriors")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("hello");*/
