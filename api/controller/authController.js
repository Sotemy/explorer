const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const env = require('../env')

const User = require('../models/usersModel')

// @access PUBLIC
const loginUser = asyncHandler (async (req, res) => {

    const { email, password } = req.body

    // Check user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        return res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid creaditals')
    }
})

// @access PUBLIC
const registerUser = asyncHandler (async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !password || !email){
        res.status(400);
        throw new Error('Please fill all fields')
    }

    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400)
        throw new Error('User exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        username,
        email,
        password: password_hash
    })

    if (user){
        return res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// @access PUBLIC
const resetUser = asyncHandler (async (req, res) => {
    return res.status(200).json({message: 'reseted'})
}
)

// @access PRIVATE
const getMe = asyncHandler (async (req, res) => {
    const {_id, username, email} = await User.findById(req.user.id)

    return res.status(200).json({
        id : _id,
        usernam: username,
        email: email
    })
}
)

// generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {loginUser, registerUser, resetUser, getMe}