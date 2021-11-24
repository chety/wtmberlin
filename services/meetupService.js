const Service = require("./baseService")
const Meetup = require('../models/meetup');
const path = require('path');

class MeetupService extends Service {
    constructor(){
        super(Meetup,`db${path.sep}meetups.json`);
    }
}
module.exports =MeetupService;