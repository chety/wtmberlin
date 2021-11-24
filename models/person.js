const Meetup = require("./meetup");
class Person {
  constructor(firstName, lastName, age, meetups = [], id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.meetups = meetups;
    this.id = Number(id);
  }
  attend(meetup) {
    this.meetups.push(meetup);
    meetup.attendees.push(`${this.firstName}-${this.lastName}-${this.age}-${this.id}`);
  }

  greet(person) {
    console.log(`Hello ${person.firstName} wellcome, I am ${this.firstName} `);
  }

  static create({ firstName, lastName, age, meetups,id }) {
    const person = new Person(firstName, lastName, age, meetups,id);
    return person;
  }
}
module.exports = Person;
