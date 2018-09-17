var express = require('express');
var path = require('path');
var open = require('open');

var port = '1000';
var appServer =  express();

//
appServer.get('/',  function(req, res){
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

// 
appServer.listen(port, function(err){
    if(err) {
        conosle.log(err);
    } else {
        open('http://localhost:' + port);
    }
});