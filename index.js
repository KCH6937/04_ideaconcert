const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("api/hello", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log("localhost:3000"));
