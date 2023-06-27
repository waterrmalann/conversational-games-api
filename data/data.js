// Import all the necessary data files.
const truths = require('./truths.json'),
      dares = require('./dares.json'),
      nhie = require('./nhie.json'),
      thisorthat = require('./this_or_that.json'),
      wyr = require('./wyr.json'),
      wyptb = require('./wyptb.json');

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomData(data) {
    return randomChoice(data.questions);
}

module.exports = {getRandomData, truths, dares, nhie, thisorthat, wyr, wyptb}