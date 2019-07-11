var orm = require("../config/orm.js");

// Reyferences:
// selectALL(); 
// insertOne():
// updateOne();

// renamed cat to burger, no we didnt eat the cat ('_>')

var burger = {
    selectALL: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertONE: function(cols, vals, cb) {
      orm.create("burger", cols, vals, function(res) {
        cb(res);
      });
    },
    updateONE: function(objColVals, condition, cb) {
      orm.update("burger", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };


module.exports = burger;