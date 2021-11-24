const express = require("express");
const route = express.Router();
const path = require("path");
const MeetupService = require('../services/meetupService');
const meetupService = new MeetupService();


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
  const meetups = await meetupService.findAll();
  // res.send(meetups);
  res.render("meetups", { meetups });
});

route.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const meetup = await meetupService.find(id);
  // res.send(meetup.attendees)
  if (meetup) {
    res.render("meetup", { meetup });
  } else {
    res.send("<h2>Meetup does not exist</h2>");
  }
});

route.post("/add", async (req, res) => {
  const meetupToAdd = req.body;
  const isSuccess = await meetupService.add(meetupToAdd);
  if (isSuccess) {
    res.status(201).send("<h3>Yay The meetup has added successfully</h3>");
  } else {
    res.status(401).send("<h3>Can not add meetup </h3>");
  }
});

route.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await meetupService.delete(Number(req.params.id));
    res.send("<h3>Successfully deleted</h3>");
  } catch (err) {
    res.send("<h3>Error while deleting</h3>");
  }
});

module.exports = route;
