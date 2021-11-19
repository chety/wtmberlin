const Service = require("./baseService")
const Meetup = require('../models/meetup');
class MeetupService extends Service {
    constructor(){
        super(Meetup,"../db/meetup.json");
    }
}
module.exports =MeetupService;