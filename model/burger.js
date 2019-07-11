var orm = require("../config/orm.js");

// Reyferences:
// selectALL(); 
// insertOne():
// updateOne();

// rename
var cat = {
    selectALL: function(cb) {
      orm.all("cats", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertONE: function(cols, vals, cb) {
      orm.create("cats", cols, vals, function(res) {
        cb(res);
      });
    },
    updateONE: function(objColVals, condition, cb) {
      orm.update("cats", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };


module.exports = burger;