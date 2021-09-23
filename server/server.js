const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const PORT = 3001;
const app = express();

app.use(parser.json());
app.use(cors());

const doctors = [
  { id: 1, name: "Dr. Jack Smith" },
  { id: 2, name: "Dr. Rachel Green" },
  { id: 3, name: "Dr. Adam West" },
];

app.get("/doctors", (req, res) => res.send(doctors));

app.listen(PORT, () => console.log("server runnig: " + PORT));
