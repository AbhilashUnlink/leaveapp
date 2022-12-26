const express = require("express");

const notes = require("./data/notes");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running");
});
app.get("/data/notes", (req, res) => {
  res.json(notes);
});

app.get("/data/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(req.params);
  res.json(note);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
