const express = require('express')
const router = express.Router()
const textController = require('../controllers/text.controller')
router.get('/iecho', textController.getInvertedText)

module.exports = router
