var http = require('http');
var sleep = require('sleep');

var options = {
  host: 'localhost',
  port: '45691',
  path: '/check',
  method: 'GET'
}

sleep.sleep(60);
var req = http.request(options, function(res){
  var response = "";
  
  res.setEncoding('utf8');
  
  res.on('data', function(chunk){
    response += chunk.toString();
  });
  
  res.on('end', function(){
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
  })
});

req.end();