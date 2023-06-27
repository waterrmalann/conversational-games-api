const express = require('express');
const APIRouter = require('./routes/api');

// Initialize Express.js Application
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Set API routes
app.use('/api', APIRouter);

app.get('/', (req, res) => {
    res.send("Conversational Games API");
})

// Start listening to requests.
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}`);
})