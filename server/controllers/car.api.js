var express = require("express"),
 router = express.Router(),
 fs = require('fs'),
 car = require("../models/car.js");
 
router.get("/", function(req, res) {
	car.find({}, function(err, data) {
		if (err) {
			res.send("error");
			return;
		}
		res.send(data);
	});
})

.get("/:id", function(req, res) {
	var id = req.params.id;
	car.find({ _id: id }, function(err, data) {
		if (err) {
			res.send("error");
			return;
		}
		res.send(data[0]);
	});
})

.post("/", function(req, res) {
	// req.body.push({
	// 	gambar.data = fs.readFileSync(req.file.path),
	// 	gambar.contentType = 'image/jpg'
	// });
	var obj = req.body;
	// var model = new car(obj);
	var model = new car;

	model.nama = obj.nama;
	model.tahunKeluaran = obj.tahunKeluaran;
	model.pabrikan = obj.pabrikan;
	model.gambar.data = fs.readFileSync(req.file.path);
	model.gambar.contentType = 'image/jpg';

	model.save(function(err) {
		console.log(req);
		if (err) {
			res.send("error");
			return;
		}
		res.send("created");
	});
})

.put("/:id", function(req, res) {
	var id = req.params.id;
	var obj = req.body;
	car.findByIdAndUpdate(
		id, 
		{ 
			name: obj.nama, 
			tahunKeluaran: obj.tahunKeluaran, 
			pabrikan: obj.pabrikan, 
			gambar: obj.gambar 
		}, 
		function(err) {
			if (err) {
				res.send("error");
				return;
			}
			res.send("updated");
		}
	);
})

.delete("/:id", function(req, res) {
	var id = req.params.id;
	car.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send("error");
			return;
		}
		res.send("deleted");
	});
});
 
module.exports = router;