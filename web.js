var express = require('express');
var fs = require('fs');
/*var buffer = require('buf');*/
var path = "./index.html";
var output = "";

if (fs.existsSync(path)){

	output = fs.readFileSync(path, 'utf8');
	
}else{

	output = "error:index not found";
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
