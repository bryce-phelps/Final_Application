//Dependencies
var express = require('express');
var router = express.Router();

//Applicant
var Applicant = require('./models/Applicant.Model')
Applicant.methods(['post']);
Applicant.register(router, '/applicants')

//Return Router
module.exports = router;
