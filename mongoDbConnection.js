const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://chety:12345@cluster0.52jzh.mongodb.net/note_store?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => console.log("Connected Successfully"))
  .catch((err) => {
    console.log(
      "Error occured while connecting to the Mongo DB. Details:",
      err,
    );
  });
