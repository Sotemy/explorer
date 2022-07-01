const express = require("express");
const {loginUser, 
    registerUser, 
    resetUser,
    getMe
} = require("../controller/authController");
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/reset', resetUser)
router.post('/me', protect, getMe)

module.exports = router