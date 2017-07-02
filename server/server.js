const express     = require('express'),
	  bps         = require('body-parser'),
	  app 		  = express(),
	  api         = require('../api/api'),
	  morgan 	  = reqire('morgan'),
	  cors        = require('cors');


	  app.use(bps.json());
	  app.use(bps.urlencoded({extended: true}));

	  app.use(morgan("dev"));

	  app.use(cors());

	  // mount routes
	  app.use('/api/v1', api);

	  // error handler
	  app.use((err, req, res, next) => {
	  	res.status(500).json(err.message);
	  	next();

	  })

	  module.exports = app;