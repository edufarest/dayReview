let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let numRank = {
    type: Number,
    min: 0,
    max: 10
};

let EntrySchema = new Schema({
    date: Date, // use doc.markModified when updating this field
    overallEnergy: numRank,
    overallMotivation: numRank,
    overallHappiness: numRank,
    morningEnergy: numRank,
    // Can add more in future

});

let Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;