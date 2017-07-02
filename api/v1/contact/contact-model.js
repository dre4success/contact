
const mongoose = require('mongoose');
let contactSchema;


mongoose.connect("mongodb://localhost/contact");

contactSchema = new mongoose.Schema({
		name: {type: String, required: true},
		phoneNumber: {type: Number, required: true},
		date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('info', contactSchema);