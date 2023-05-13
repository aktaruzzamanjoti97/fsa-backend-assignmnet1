
const express = require('express');
const getPersonProfile = require('./businessLogic/personProfile');
const getCharactersInfo = require('./businessLogic/characterInfo');
const getRandomNumber = require('./businessLogic/randomNumber');

const app = express();
app.use(express.json());

app.get('/api/random', (req, res) => {
    const startValue = req.query.start;
    const endValue = req.query.end;

    try {
        res.json({ startValue, endValue, getRandomNumber: getRandomNumber(startValue, endValue) })
    } catch {
        res.status(422).json({ msg: "Invalid random number" })
    }
})

app.get('/api/user-info', (req, res) => {
    const properties = Object.keys(req.query);

    try {
        res.json(getPersonProfile(properties))
    } catch {
        res.status(422).json({ msg: "Invalid user info" })
    }
})

app.get('/api/character-info', (req, res) => {
    const str = req.query.string;
    try {
        res.json(getCharactersInfo(str))
    } catch {
        res.status(422).json({ msg: "Invalid character info" })
    }
})


app.listen(4000, () => {
    console.log('Server is listening on PORT 4000');
})






