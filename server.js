var redis = require('redis');
const path = require('path');
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const express = require('express');

var client = redis.createClient();

const server = express()
	.get('/', function(req, res){
		//// We'll just be serving up the index.html that's in the 'public' folder
		res.send("Hello World!");
	})
	.get('/:k/:v', function(req, res){
		//// We'll just be serving up the index.html that's in the 'public' folder
		client.set(req.params.k, req.params.v);
		res.send(req.params.k + " = " + req.params.v);
	})
	.get('/:k', function(req, res){
		//// We'll just be serving up the index.html that's in the 'public' folder
		client.get(req.params.k, function(error, result) {
		  if (error) throw error;
		  console.log("result", result);
		  res.send(result);
		});
	})
//	.use('/public', express.static('public'))
	.listen(PORT, () => console.log("Listening on PORT " + PORT))
	;

