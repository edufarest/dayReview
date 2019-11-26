let mongoose = require('mongoose')
let Entry = require('../models/entriesModel');

module.exports = {

    create: (req, res) => {

        const entry = new Entry({
            date: req.body.date || Date.now(),
            overallEnergy: req.body.overallEnergy,
            overallMotivation: req.body.overallMotivation,
            overallHappiness: req.body.overallHappiness,
            morningEnergy: req.body.morningEnergy,
            bedTime: req.body.bedTime,
            wakeUpTime: req.body.wakeUpTime,
            sleepTime: req.body.sleepTime,
            comment: req.body.comment || ""
            /*
            Ideas: Comment, activities, bedtime, new things,
             */
        });

        return entry.save().then((newEntry) => {
            return res.status(201).json({
                success: true,
                entry: newEntry
            })
        }).catch((err) => {
            res.status(500).json({
                success: false,
                error: err
            })
        })
    }

};