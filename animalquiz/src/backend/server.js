require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./animalsRouter')
const cors = require('cors')

app.use(cors()) 
app.use(express.json()) 
app.use(routes) 

/* Connecting to the database. */
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

/* Listening to the port that is defined in the .env file. */
app.listen(process.env.PORT, () => {
    console.log("The API is running...")
})