var orm = require("../config/orm.js");

// Reyferences:
// selectALL(); 
// insertOne():
// updateOne();

// renamed cat to burger, no we didnt eat the cat ('_>')

var burger = {
    selectALL: function(cb) {
      orm.selectALL("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arreys.
    insertONE: function(cols, vals, cb) {
      orm.insertONE("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateONE: function(objColVals, condition, cb) {
      orm.updateONE("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };


module.exports = burger;