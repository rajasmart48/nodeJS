
/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

// create express app
const app = express();

// parse requests of URL
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of JSON
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome!!"});
});

//define a different route
app.get('/',(req,res) => {
	res.json({"message" : "Welcomr to Test Route!"});
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});