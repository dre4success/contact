const express 		= require('express'),
	  api     		= express.Router(),
	  contactRouter = require('./v1/contact/contact-router');

	  api.use("/contact", contactRouter);

	  module.exports = api;