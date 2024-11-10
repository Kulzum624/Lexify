const users = require("../controllers/user.controller.js");

var router = require("express").Router();

// router.get("/users", users.findAll);

// router.delete("/users/:user_id", users.findByPk);

router.get("/users", users.findAll);

router.post("/users", users.create);

router.get("/users/:userId", users.findByPk);

router.put("/users/:userId", users.update);

router.delete("/users/:userId", users.delete);

router.get('*', function(req, res){
    res.status(404).send(`The Url you are accessing is invalid ${req.url}`);
  });

module.exports = router;