const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
dotenv.config();
const logger = require('morgan');

const mongoose = require('mongoose')
mongoose.connect(process.env.DB, {useNewUrlParser: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB conn error'))

let entryRouter = require('./routes/entry')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/entry', entryRouter)

module.exports = app;
