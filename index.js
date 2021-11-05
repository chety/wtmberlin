const Person = require("./person");
const Meetup = require("./meetup");
const Database = require("./database");

const chety = new Person("Chety", "Clooney", 33);
const mirko = new Person("Mirko", "Clooney", 1);
// chety.greet(mirko)

const wtmb = new Meetup(1, "Woman Tech Makers Berlin With promises");

// wtmb.printAttendeeNames();
chety.attend(wtmb);
mirko.attend(wtmb);

Database.saveAsyncCallback("meetup.json", wtmb , err => {
  if (err) {
   console.error(err) 
   return;
  }
  Database.loadAsyncCallback("meetup.json", (err,data) => {
    if(err){
      console.error("Got error while reading meetup.json. Details -> ",err)
      return
    }
    const meetupObject = Meetup.create(data);
    console.log(meetupObject);
    meetupObject.printAttendeeNames();
  })
})