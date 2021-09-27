const mainController = require ('../controllers/mainController.js');

let express = require ('express');

let router = express.Router();

router.get('/', mainController.index)

module.exports = router;