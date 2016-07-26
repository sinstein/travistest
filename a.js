var http = require('http');

var options = {
  host: 'localhost',
  port: '45691',
  path: '/check',
  method: 'GET'
}


setTimeout(function(){
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

}, 50000);

