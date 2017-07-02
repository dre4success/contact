const express  		= require('express'),
	  router        = express.Router(),
	  controller    = require('./contact-controller');


	  router.param("id", controller.intercerptIDs);

	  router.route('/')
	  	.get(controller.fetchAllContact)
	  	.post(controller.addContact);

	  router.route('/:id')
	  	.get(controller.getContact)
	  	.delete(controller.removeContact)
	  	.put(controller.updateContact);


	  module.exports = router;