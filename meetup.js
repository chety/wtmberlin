const Chalk = require("chalk")
const Person = require('./person');

class Meetup {
    constructor(id,name,attendees = []){
        this.id = id;
        this.name = name;
        this.attendees = attendees
    }   
    printAttendeeNames(){
        this.attendees.forEach(this.printNames)
    }
    printNames(person){
        console.log(Chalk.dim.yellowBright.bold.bgBlackBright(person.firstName))
    }
    static create({id,name,attendees}){
        const formattedAttendees = attendees.map(data => {
            const [firstName,lastName,age] = data.split("-");
            return Person.create({firstName,lastName,age});
        })
        return new Meetup(id,name,formattedAttendees)
    }
}
module.exports = Meetup