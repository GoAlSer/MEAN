const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
	title: String,
	description: String,
	platforms: String,
	developer: String,
	publisher: String,
	releaseDate: String
});

module.exports = mongoose.model('Games', GamesSchema);