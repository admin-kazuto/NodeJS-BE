const { required } = require("joi");
const { model } = require("mongoose");
const express = require("express");
const router = express.Router()
const newsController = require('../controller/newController')

router.use('/', newsController.index)


module.exports = router;
