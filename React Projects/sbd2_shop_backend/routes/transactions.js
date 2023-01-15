var express = require("express");
const { addNewTransaction } = require("../controllers/transactionsController");
var router = express.Router();

router.post("/addTransaction", addNewTransaction);

module.exports = router;
