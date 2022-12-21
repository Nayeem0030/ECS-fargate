const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app 123456");
});

app.get("/me", (req, res) => {
  const port = process.env.PORT;
  res.send(`Hi I am test 123456 ${port}`);
});

app.get("/askari", (req, res) => {
  res.send("Hi I am askari");
});

app.listen(5000, () => {
  console.log("listening");
});
