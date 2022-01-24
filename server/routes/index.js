const express = require('express');
const router = express.Router();

const model = require('../model/sailor_team');
/* GET data. */
router.get('/crew', function (req, res) {
	res.status(200).send(model.getData());
});



module.exports = router;
