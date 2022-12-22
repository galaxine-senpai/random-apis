// console.log("Hello World!");

const express = require('express')
const app = express()

// API Stuff
const fortunesfile = require('./apistuff/fortunes.json')
const animalnoisesfile = require('./apistuff/animalnoises.json')
const complimentsfile = require('./apistuff/compliments.json')

var apiendpoints = ["fortune", "animalnoises","compliments"]
var morgan = require('morgan')

app.use(morgan(':method :url :status :response-time ms - :remote-addr'))

app.get('/', (req, res) => {
    res.redirect('/api/');
})

app.get('/api/', (req, res) => {
    res.send('Please use one of the valid API endpoints: /api/v1/')
})

app.get('/api/v1/', (req, res) => {
    res.send(`Please use one of the valid API endpoints: ${apiendpoints}`)
})

app.get('/api/v1/fortune/', (req, res) => {
    let fortune = fortunesfile.fortunes
    var randomFortune = fortune[Math.floor(Math.random() * fortune.length)];
    // console.log(randomFortune)
    res.send(randomFortune)
})

app.get('/api/v1/animalnoises/', (req, res) => {
    let animalnoises = animalnoisesfile.noises
    var randomAnimalNoises = animalnoises[Math.floor(Math.random() * animalnoises.length)];
    // console.log(randomAnimalNoises)
    res.send(randomAnimalNoises)
})

app.get('/api/v1/compliments', (req, res) => {
    let compliments = complimentsfile.compliments
    var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    // console.log(randomCompliment)
    res.send(randomCompliment)
})

app.listen(3000, () => {
    console.log('Stupid API\'s listening on port 3000!')
});