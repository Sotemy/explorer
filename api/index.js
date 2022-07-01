const express = require('express')
const colors = require("colors")
// const cors = require('cors')
const connectDB = require("./config/db")
const errorHandler = require( "./middleware/errorMiddleware")
const env = require('./env')

connectDB()

const app = express();

// app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/appRouter'))
app.use('/api/auth', require('./routes/authRouter'))

app.use(errorHandler)

app.listen(env.PORT, () => { console.log('Server is up!') })