var orm = require("../config/orm.js");

// Reyferences:
// selectALL(); 
// insertOne():
// updateOne();
// Delete

// renamed cat to burger, no we didnt eat the cat ('_>')

var burger = {
    selectALL: function(cb) {
      orm.selectALL("burgers", function(res) {
        cb(res);
      });
    },

    insertONE: function(cols, vals, cb) {
      orm.insertONE("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    updateONE: function(objColVals, condition, cb) {
      orm.updateONE("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

    deleteOne: function(condition, cb) {
      orm.deleteOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };


module.exports = burger;