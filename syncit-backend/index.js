var express = require('express');
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
var Tesseract = require('tesseract.js')
const CircularJSON = require('circular-json');

var app = express();

app.get('/imageRecognition', function (req, res) {
  var visualRecognition = new VisualRecognitionV3({
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
    version: '2018-03-19',
    iam_apikey: 'qjPwGGVw0B26Ej61coGqH-CYgmq5eCXUeNO9ekR8L4tG'
  });

  var images_file = fs.createReadStream('C://Users//IBM_ADMIN//Desktop//Test Data//New folder//20100526-mcdonalds-fries-04-perfect-mcs.jpg');
  var classifier_ids = ["DefaultCustomModel_637177744"];
  var threshold = 0.7;

  var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
  };

  visualRecognition.classify(params, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8100'
      });
      res.send(response);
    }
  });

});


app.get('/textRecognition', function (req, res) {
  Tesseract.recognize('C://Users//IBM_ADMIN//Desktop//lays-dill-pickle.jpg')
    .then(function (result) {
      res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8100',
        'Content-type': 'application/json'
      });
  let tesResponse = {
          lines : []
      }
      result.blocks[0].paragraphs[0].lines.map((i)=>{
        tesResponse.lines.push(i.text);
      })
      console.log("response ::", typeof result);
      res.send(CircularJSON.stringify(tesResponse));
    })

});

app.listen(8888);