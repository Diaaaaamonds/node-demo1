var express = require('express');

var app = express();


app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.send('hello')
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log('服务器启动',host,port);
})