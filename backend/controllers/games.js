const mongoose = require("mongoose");
let Games = mongoose.model('Games');


exports.games_create = (req, res) => {
	
	let games = new Games({

		title: req.body.title,
		description: req.body.description,
		platforms: req.body.platforms,
		developer: req.body.developer,
		publisher: req.body.publisher,
		releaseDate: req.body.releaseDate;
});
	games.save((err) => {
		if(err) return next(err);
		res.send(games);
	})
};

exports.games_details = (req, res) => {
	Games.findById(req.params.id, (err, games) => {
		if (err) return next(err);
		res.send(games);
	})
};

exports.games_update = (req, res) => {
	Games.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, games) => {
		if (err) return next(err);
		res.send("Games update")
	})
};

exports.games_delete = (req, res) => {
	Games.findByIDAndDelete(req.params.id, (err) => {
		if(err) return next(err);
		res.send("delete successfully")
	})
};

exports.games_list = (req, res) => {
	Games.find((err, games) => {
		if(err) {
			console.log(err);
		}
		res.json(games);
	})
}

