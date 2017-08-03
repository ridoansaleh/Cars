var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var carSchema = new Schema({
	_id: { 
		type: objectId, 
		auto: true 
	},
	nama: { 
		type: String, 
		required: true 
	},
	tahunKeluaran: { 
		type: String, 
		required: true 
	},
	pabrikan: { 
		type: String, 
		required: true 
	},
	gambar: { 
		data: Buffer, 
		contentType: String
	}
}, {
	versionKey: false
});
 
var car = mongoose.model('cars', carSchema);
 
module.exports = car;