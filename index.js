const MeetupService = require("./services/meetupService");

const personRouter = require("./routes/personRoute");
const meetupRouter = require("./routes/meetupRoute");
require("./mongoDbConnection")
const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "pug");
app.use("/person", personRouter);
app.use("/meetups", meetupRouter);

app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on ${PORT}`);
});

// (async function () {
//   try {
//     var meetup = new MeetupService();
//     const data = await meetup.find(1);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// })();
