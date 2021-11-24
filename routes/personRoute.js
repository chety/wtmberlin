const express = require("express");
const route = express.Router();
const path = require("path");
const PersonService = require('../services/personService');
const personService = new PersonService();


route.get("/", (req, res) => {
  //to return any data
  // res.send("<h2>Chety is awsome</h2>");

  //to send a specific file
  // res.sendFile(`${__dirname}${path.sep}index.html`);
  // res.sendFile("./index.html",{root:__dirname});

  //to render a dynamic template
  res.render("main");
});

route.get("/all", async (req, res) => {
  const people = await personService.findAll();
  // res.send(persons);
  res.render("people", { people });
});

route.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const person = await personService.find(id);
  if (person) {
    res.render("person", { person });
  } else {
    res.send("<h2>Person does not exist</h2>");
  }
});

route.post("/add", async (req, res) => {
  const personToAdd = req.body;
  const isSuccess = await personService.add(personToAdd);
  if (isSuccess) {
    res.status(201).send("<h3>Yay The person has added successfully</h3>");
  } else {
    res.status(401).send("<h3>Can not add person </h3>");
  }
});

route.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await personService.delete(Number(req.params.id));
    res.send("<h3>Successfully deleted</h3>");
  } catch (err) {
    res.send("<h3>Error while deleting</h3>");
  }
});

module.exports = route;
