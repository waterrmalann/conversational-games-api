const express = require('express');
const router = express.Router();
const {getRandomData, nhie, truths, dares, thisorthat, wyptb, wyr} = require('../data/data');

router.get('/', (req, res) => {
    res.send("/truth /dare /tot /nhie /wyr /wyptb");
});

// Returns a truth question.
router.get('/truth', (req, res) => {
    let question = getRandomData(truths);
    res.json({question});
})

// Returns a dare.
router.get('/dare', (req, res) => {
    let question = getRandomData(dares);
    res.json({question});
});

// Returns a "This or That" question.
router.get('/tot', (req, res) => {
    let question = getRandomData(thisorthat)
    res.json({question});
});

// Returns a "Never Have I Ever" question.
router.get('/nhie', (req, res) => {
    let question = getRandomData(nhie);
    res.json({question});
});

// Retuens a "Would You Rather" question.
router.get('/wyr', (req, res) => {
    let {option1, option2}= getRandomData(wyr);
    res.json({option1, option2});
});

// Returns a "Will You Press The Button" dilemma.
router.get('/wyptb', (req, res) => {
    let {question, but}= getRandomData(wyptb);
    res.json({question, but});
});

module.exports = router;