const express = require("express");

const app = express();

app.get("/", (rreq, res) => {
  res.send("API is Running...");
});

app.listen(5000, console.log("Server running on port 5000"));
