const env = require('../env')

const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.MONGO_URI)

        console.log(('DB connected: '+conn.connection.host).cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB