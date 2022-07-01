const express = require('express')

const {getResponse, postResponse, putResponse, deleteResponse} = require('../controller/appController')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/')
    .get(protect, getResponse)
    .post(protect, postResponse)

router.route('/:id')
    .put(protect, putResponse)
    .delete(protect, deleteResponse)

module.exports = router;