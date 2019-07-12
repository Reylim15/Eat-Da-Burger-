var express = require("express");

var router = express.Router();

var burger = require("../model/burger.js");

// ROUTES YEETYEET FUN FUN

// Home sweet HOME yall
router.get("/", function(req, res) {
    burger.selectALL(function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers", function(req, res) {
    burger.insertONE([
      "burger_name"
    ], [
      req.body.burger_name,
    ], function(data) {
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
    burger.updateONE({
      devoured:true
    }, condition, function(data) {
    res.redirect("/");
    
    });
  });
  
// YOUR TIME WILL COME TO DELETE THE BURGERS POLLUTING MY DB !, But now is not the time little one.

//   router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

module.exports = router;