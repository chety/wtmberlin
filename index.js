const Person = require("./models/person");
const Meetup = require("./models/meetup");
const PersonService = require("./services/personService");
const Database = require("./database");

const chety = new Person("Chety", "Clooney", 33, [], 1);
const mirko = new Person("Mirko", "Clooney", 1, [], 2);
// chety.greet(mirko)

const wtmb = new Meetup(1, "Woman Tech Makers Berlin With promises");

// wtmb.printAttendeeNames();
chety.attend(wtmb);
mirko.attend(wtmb);


// personService.saveAll([chety, mirko]);
(
  async function(){
    const personService = new PersonService();
    // const rodik = new Person("Rodiko", "Clooney", 1, [], 2);
    // rodik.attend(wtmb);
    try {
      const result = await personService.delete(3);
      console.log("Result:",result)

    } catch (err) {
      console.log("Details:",err)
    }
  }
)()

// Database.saveAsyncCallback("meetup.json", wtmb , err => {
//   if (err) {
//    console.error(err)
//    return;
//   }
//   Database.loadAsyncCallback("meetup.json", (err,data) => {
//     if(err){
//       console.error("Got error while reading meetup.json. Details -> ",err)
//       return
//     }
//     const meetupObject = Meetup.create(data);
//     console.log(meetupObject);
//     meetupObject.printAttendeeNames();
//   })
// })
