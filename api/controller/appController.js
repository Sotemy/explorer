const asyncHandler = require("express-async-handler")

const Items = require("../models/itemsModel")
const User = require("../models/usersModel")



// @desc   Get item
// @route  GET /api
// @access Private

const getResponse = asyncHandler(async (req, res) => {
    const items = await Items.find({user: req.user.id})

    return res.status(200).json(items);
})
// @desc   Get item
// @route  GET /api
// @access Private

const postResponse = asyncHandler(async (req, res) => {

    if (!req.body.text){
        res.status(400)
        throw new Error('please add text')
    }

    const item = await Items.create({
        text: req.body.text,
        user: req.user.id
    })

    return res.status(200).json(item);
})

// @desc   Get item
// @route  GET /api
// @access Private

const putResponse = asyncHandler(async (req, res) => {
    const item = await Items.findById(req.params.id)
    if (!item){
        res.status(400)
        throw new error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // user check
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(item.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
    }



    const updatedItem = await Items.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true}
        )

    return res.status(200).json(updatedItem);
})

// @desc   Get item
// @route  GET /api
// @access Private

const deleteResponse = asyncHandler(async (req, res) => {
    const item = await Items.findById(req.params.id)

    if(!item){
        res.status(401)
        throw new Error('Item not found')
    }

    const user = await User.findById(req.user.id)

    // user check
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(item.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
    }


    await item.remove()


    return res.status(200).json({
        id: req.params.id
    });
})

module.exports = {
    getResponse, 
    postResponse, 
    putResponse, 
    deleteResponse
}