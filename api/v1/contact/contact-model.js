
const mongoose = require('mongoose'),
		contactSchema;


mongoose.connect("mongodb://localhost/contact");

contactSchema = new mongoose.Schema({
		name: {type: String, required: true},
		phone number: {type: Number, required: true},
		date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('info', contactSchema);