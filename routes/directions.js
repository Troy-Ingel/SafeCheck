// import modules
var express = require('express');
var router = express.Router();
const https = require('https');

const apiKey = 'AIzaSyDKWd6bBOs6KH10TcE5729ZTWeUdrIdyLI';

// endpoint for fetching transit directions 
router.get('/transit', function(req, res){

	const baseUrl = 'https://maps.googleapis.com/maps/api/directions/json';
	const origin = req.query.origin;
	const destination = req.query.destination;
	var url = baseUrl + '?origin=' + origin + '&destination=' + destination;
	url += '&key=' + apiKey;
	url += '&mode=transit';

	https.get(url, (httpRes) => {
		let data = '';
		httpRes.on('data', (chunk)=> data += chunk);
		httpRes.on('end', ()=>{
			res.json(JSON.parse(data));
		});
	}).on('error', (err) => {
		res.json(err);
	});
})
// endpoint for fetching driving directions
.get('/driving', function(req, res){
	const baseUrl = 'https://maps.googleapis.com/maps/api/directions/json';
	const origin = req.query.origin;
	const destination = req.query.destination;
	var url = baseUrl + '?origin=' + origin + '&destination=' + destination;
	url += '&key=' + apiKey;
	url += '&mode=driving&departure_time=now';

	https.get(url, (httpRes) => {
		let data = '';
		httpRes.on('data', (chunk)=> data += chunk);
		httpRes.on('end', ()=>{
			res.json(JSON.parse(data));
		});
	}).on('error', (err) => {
		res.json(err);
	});
})
// endpoint for fetching the users geolocation
.get('/geocode', function(req, res){

	const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
	const latlng = req.query.latlng;
	var url = baseUrl + '?latlng=' + latlng;
	url += '&key=' + apiKey;

	console.log(url);

	https.get(url, (httpRes) => {
		let data = '';
		httpRes.on('data', (chunk)=> data += chunk);
		httpRes.on('end', ()=>{
			res.json(JSON.parse(data));
		});
	}).on('error', (err) => {
		res.json(err);
	});
})

module.exports = router;