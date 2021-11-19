const Service = require("./baseService")
const Person = require('../models/person');
const path = require('path');
class PersonService extends Service {
    constructor(){
        super(Person, `db${path.sep}persons.json`);
    }
}
module.exports = PersonService;