// import modules
var express = require('express');
var router = express.Router();
const https = require('https');

// constants
const baseUrl = 'https://cttravelsmart.org/api/';
const apiKey = '860e2b8fe69b47c785ba57af53aceb6b';

// endpoint for fetching all I-95 travel events
router.get('/events', function(req, res){
	https.get(baseUrl + 'getevents?format=json&key=' + apiKey, (httpRes) => {
		let data = '';
		httpRes.on('data', (chunk)=> data += chunk);
		httpRes.on('end', ()=>{
			var json = JSON.parse(data);
			var output = [];

			//Look through all json received and search for 'I-95'
			for(var i = 0; i < json.length; i++){
				var cur = json[i];
				if(cur.RoadwayName == "I-95") output.push(cur);
			}

			res.json(output);
		});
	}).on('error', (err) => {
		res.json(err);
	});
})
// endpoint for fetching all CT travel alerts
.get('/alerts', function(req, res){
    https.get(baseUrl + 'getalerts?format=json&key=' + apiKey, (httpRes) => {
		let data = '';
		httpRes.on('data', (chunk)=> data += chunk);
		httpRes.on('end', ()=> {
			var json = JSON.parse(data);
			var output = [];

			//Look through all json received and search for 'I-95'
			for(var i = 0; i < json.length; i++){
				var cur = json[i];
				if(cur.Message.indexOf('I-95') > -1) output.push(cur);
			}

			res.json(output);
		});
	}).on('error', (err) => {
		res.json(err);
	});
});

module.exports = router;