// import modules
var express = require('express');
var router = express.Router();
var request = require('request');

// import data for http post request to camera API
var cameraHttpPostBody = require('../config/cameraHttpPostData');

// API access information
const baseUrl = 'https://cttravelsmart.org';
const key = '860e2b8fe69b47c785ba57af53aceb6b';

// endpoint for fetching all I-95 road camera links
router.get('/', function(req, res) {
    
    const postOptions = {
        url: baseUrl + '/List/GetData/Cameras?key=' + key,
        method: 'POST',
        json: true,
        body: cameraHttpPostBody
    };

    //Send the post request to get the camera feed
    request(postOptions, getCamerasComplete);

    function getCamerasComplete(error, response, body){
        body.data.forEach(function(i){
            // prepend the base-url to the link provided by json
            i.tooltipUrl = 'https://cttravelsmart.org' + i.tooltipUrl;
        });

        // send the modified json
        res.json(body.data);
    }
});

module.exports = router;