class   Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;        
        this.lastName = lastName;
        this.age = age;
        this.meetups = []
    }
    attend(meetup){
        this.meetups.push(meetup);
        meetup.attendees.push(`${this.firstName}-${this.lastName}-${this.age}`)
    }

    greet(person){
        console.log(`Hello ${person.firstName} wellcome, I am ${this.firstName} `)
    }

    static create({firstName,lastName,age}){
        return new Person(firstName,lastName,age);
    }

}
module.exports = Person