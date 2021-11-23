const path = require("path");
const PersonService = require('./services/personService');
const personService = new PersonService();
const express = require('express');
const app = express();
app.use(express.json())
app.set("view engine","pug");
app.get("/", (req, res) => {
  //to return any data
  // res.send("<h2>Chety is awsome</h2>");

  //to send a specific file
  // res.sendFile(`${__dirname}${path.sep}index.html`);
  // res.sendFile("./index.html",{root:__dirname});
  
  //to render a dynamic template
  res.render("main");
});

app.get("/person/all", async(req,res) => {
  const people = await personService.findAll();
  // res.send(persons);
  res.render("people",{people})
})

app.get("/person/:id", async (req,res) => {
  const id = Number(req.params.id);
  const person = await personService.find(id)
  if (person) {
    res.render("person",{person})
  }else{
    res.send("<h2>Person does not exist</h2>")
  }
})

app.post("/person/add", async (req,res) => {
  const personToAdd = req.body;
  const isSuccess = await personService.add(personToAdd);
  if (isSuccess) {
    res.status(201).send("<h3>Yay The person has added successfully</h3>")
  }else{
    res.status(401).send("<h3>Can not add person </h3>")
  }
})

app.delete("/person/:id", async (req,res) => {
  try {
    console.log(req.params.id)
    await personService.delete(Number(req.params.id));
    res.send("<h3>Successfully deleted</h3>");
  } catch (err) {
    res.send("<h3>Error while deleting</h3>");
  }
})


app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
