const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  const today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.sendFile(__dirname + '/weekend.html');
  } else {
    res.sendFile(__dirname + '/workday.html');
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
