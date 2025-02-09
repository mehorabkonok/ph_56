const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello server.");
});

app.listen(port, () => {
  console.log(`The server is running on the port: ${port}`);
});
