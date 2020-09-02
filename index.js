var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meetnhireController = require('./controller/meetnhire.controller');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.listen(3000, () => {
    console.log('meetnhire-room app listening on port 2019!')
});
//For User
app.post('/meetnhire-room/api/createRoom', meetnhireController.createRoom);