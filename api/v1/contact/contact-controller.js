
const contactModel = require('./contact-model');

module.exports.intercerptIDs = (req, res, next, id) => {

	contactModel.findById(id)
	.then((data) => {
		if(!data) { return next(new Error ("Can't find contact id")); }
		req.contact = data;
		next();
	}, (err) => { return next(err); })
}

module.exports.addContact = (req, res, next) => {

		let info = req.body;

		let contact = new contactModel(info);
		contact.save((err, data) => {
			if(err) {return next(new Error ("Failed to add contact")); }

			res.status(200).json(data);
		})
}

module.exports.fetchAllContact = (req, res, next) => {

		contactModel.find((err, data) => {
			if(err) { return next(new Error("Failed to fetch contacts")); }

			res.status(200).json(data);
		})
}

module.exports.getContact = (req, res, next) => {

		if(!req.contact) { return next (new Error("Failed to get contact by ID")); }

		res.status(200).json(req.contact);
}

module.exports.removeContact = (req, res, next) => {

		contactModel.remove({ _id: req.contact})
}