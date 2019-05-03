const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

let games = require('./models/games')
let router = require('./routes/games');

const app = express();

app.use(bodyParser.json());
app.use('/games', router);

mongoose.connect('mongodb://localhost:27017/games', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB connection successfully!")
});

app.use('/', router);


app.listen(8000, () => console.log('Express server running on port 8000'));
