let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let numRank = {
    type: Number,
    min: 0,
    max: 10,
    required: true
};

let EntrySchema = new Schema({
    date: Date,
    overallEnergy: numRank,
    overallMotivation: numRank,
    overallHappiness: numRank,
    morningEnergy: numRank,
    bedTime: Date,
    wakeUpTime: Date,
    sleepTime: Number,
    comment: String,
    // activities: [] // Include start, finish, and if done, and perhaps a rating
    // Can add more in future

});

let Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;