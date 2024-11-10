const lawyers = require("../controllers/lawyer.controller.js");

var router = require("express").Router();


router.get("/lawyers", lawyers.findAll);

router.post("/lawyers", lawyers.create);

router.get("/lawyers/:lawyerId", lawyers.findByPk);

router.put("/lawyers/:lawyerId", lawyers.update);

router.delete("/lawyers/:lawyerId", lawyers.delete);

router.get("/lawyers/filter", lawyers.viewLawyers);

router.get('*', function(req, res){
    res.status(404).send(`The Url you are accessing is invalid ${req.url}`);
  });

module.exports = router;