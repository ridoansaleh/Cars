var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/cars');
 
module.exports = connection;