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

const patients = [
  {
    healthNumber: 12301,
    name: "Patient Lucy",
    dateOfBirth: new Date(1991, 12, 25),
    address: "111, Main St., Winnipeg",
    phoneNumber: "204 123-4567",
  },
  {
    healthNumber: 12302,
    name: "Patient Mark",
    dateOfBirth: new Date(1991, 12, 25),
    address: "111, Main St., Winnipeg",
    phoneNumber: "204 123-4567",
  },
];

app.get("/doctors", (req, res) => res.send(doctors));
app.get("/patients", (req, res) => res.send(patients));

app.get("/patients/:id", (req, res) => {
  const hn = req.params.id;
  const patient = patients.find((p) => p.healthNumber === +hn);

  if (patient) res.send(patient);

  res.status(404).send(`Patient with hn = ${hn} doesn't exist!`);
});

app.listen(PORT, () => console.log("server runnig: " + PORT));
