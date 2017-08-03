var express = require('express'),
 router = express.Router();
 
//routes for car api
router.use("/car", require("../controllers/car.api"));
 
//add here other api routes
 
module.exports = router;