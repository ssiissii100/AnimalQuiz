/* This is importing the Animal model and the express router. The above code is a router that is
getting the data from the database and returning it to the client. */


/* This is importing the Animal model and the express router. */
const Animal = require('./Animal');
const express = require('express')
const router = express.Router()

/* The above code is a router that is getting the data from the database and returning it to the
client. */

router.get('/speed', async (req, res) => {
    try {
        const speed = await Animal.find({}, 'speed')
        return res.status(200).json(speed)

    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

router.get('/length', async (req, res) => {
    try {
        const length = await Animal.find({}, 'length')
        return res.status(200).json(length)

    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

router.get('/lifespan', async (req, res) => {
    try {
        const lifspan = await Animal.find({}, 'lifspan')
        return res.status(200).json(lifspan)

    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

router.get('/height', async (req, res) => {
    try {
        const height = await Animal.find({}, 'height')
        return res.status(200).json(height)

    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

router.get('/weight', async (req, res) => {
    try {
        const weight = await Animal.find({}, 'weight')
        return res.status(200).json(weight)

    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

/* Exporting the router to the server.js file. */
module.exports = router