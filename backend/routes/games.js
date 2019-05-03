const express = require('express');
const router = express.Router();

const games_controller = require("../controllers/games");

// router.get('/', (req, res) => {
//   res.send('Games home page');
// });


router.get("/games", games_controller.games_list);

router.post('/games/create', games_controller.games_create);

router.get('/games/:id', games_controller.games_details);

router.put('/games/:id/update', games_controller.games_update);

router.delete('/games/:id/delete', games_controller.games_delete);


module.exports = router;





// router.get("/games", (req, res) => {
// 	Games.find((err, games) => {
// 		if(err)
// 			console.log(err);
// 		else 
// 			res.json(games);
// 	});
// });

// const express = require('express');
// const mongoose = require('mongoose');
// let router = express.Router();
// let Games = mongoose.model("Games")




// router.get("/games", (req, res) => {
// 	Games.find((err, games) => {
// 		if(err)
// 			console.log(err);
// 		else 
// 			res.json(games);
// 	});
// });

// router.get('/games/:id', (req, res) => {
// 	Games.findById(req.params.id, (err, games) => {
// 		if(err)
// 			console.log(err);
// 		else 
// 			res.json(Games);
// 	});
// });

// // router.route('/games/add').post((req, res) => {
// // 	let game = new games(req.body);
// // 	games.save() 
// // 		.then(games => {
// // 			res.status(200).json({'games': 'Added successfully'});
// // 		})
// // 		.catch(err => {
// // 			res.status(400).send("Failed to create new record");
// // 		})
// // });

// router.post('/games/add', (req, res) => {
// 	let game = new Games();

// 		game.title = req.body.title;
// 		game.description = req.body.description;
// 		game.platforms = req.body.platforms;
// 		game.developer = req.body.developer;
// 		game.publisher = req.body.publisher;
// 		game.releaseDate = req.body.releaseDate;

// 	game.save() 
// 		.then(games => {
// 			res.status(200).json({'games': 'Added successfully'});
// 		})
// 		.catch(err => {
// 			res.status(400).send("Failed to create new record");
// 		})
// });


// router.route('/games/update/:id').post((req, res) => {
// 	games.findById(req.params.id, (err, games) => {
// 		if (!games)
// 			return next(new Error('Could not load document'));
// 		else
// 			games.title = req.body.title;
// 			games.description = req.body.description;
// 			games.platforms = req.body.platforms;
// 			games.developer = req.body.developer;
// 			games.publisher = req.body.publisher;
// 			games.releaseDate = req.body.releaseDate;

// 			games.save().then(games => {
// 				res.json('Update done');
// 			}).catch(err => {
// 				res.status(400).send('Update failed')
// 			});
// 	});
// });

// router.get('/games/delete/:id', (req, res) => {
// 	games.findByIdAndRemove({_id: req.params.id}, (err, games) => {
// 		if(err)
// 			res.json(err);
// 		else
// 			res.json('Remove successfully')
// 	});
// });


// module.exports = router;