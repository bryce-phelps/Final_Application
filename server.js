// server.js

// modules =================================================
var express        = require('express');
var appe            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongodb = require('mongodb')
var router = express.Router();
var Applicant = require('./app/models/Applicant.Model');
var MongoClient = mongodb.MongoClient;

//var db;
var database;
// configuration ==========================================
var mongoose = require('mongoose');
var url = 'mongodb://localhost/Application'
MongoClient.connect(url, function(err,db){
  database = db;
  if (err) {
    console.log("Error connecting to DataBase")
  }
  else {
    console.log("Connection Successful to Database")
  }
})

// set our port
var port = process.env.PORT || 9000;

// parse application/json
appe.use(bodyParser.json());

// parse application/vnd.api+json as json
appe.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
appe.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
appe.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
appe.use(express.static(__dirname + '/public'));

// routes ==================================================
//require('./app/routes')(appe); // configure our routes

// start app ===============================================

appe.post('/applicant',function(req, res){

  var newApplicant = req.body;

  var collection = database.collection('Applicants')

  collection.insert(newApplicant , function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Insert Successful');
    }
    //Close connection
    //database.close();
  });

  res.end()
})

appe.listen(port);

console.log('port ' + port);

// expose app
exports = module.exports = appe;
