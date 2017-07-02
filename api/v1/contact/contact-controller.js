
const contactModel = require('./contact-model');

module.exports.intercerptIDs = (req, res, next, id) => {

	contactModel.findById(id)
	.then((data) => {
		if(!data) { return next(new Error ("Can't find contact id")); }
		req.contact = data;
		next();
	}, (err) => { return next(err); })
}