const express 	= require('express'),
	  app 		= require('./server/server');



// serve static files
app.use(express.static(__dirname + "/www"));

app.listen(3000, () => {
	console.log("server started...")
});