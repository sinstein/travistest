var http = require('http');

var options = {
  host: 'localhost',
  port: '45691',
  path: '/check',
  method: 'GET'
}


setTimeout(function(){
  console.log(process.env.BROWSERSTACK_USER);
  console.log(process.env.BROWSERSTACK_ACCESS_KEY);
  console.log(process.env.BROWSERSTACK_LOCAL);
  console.log(process.env.BROWSERSTACK_LOCAL_IDENTIFIER);

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

}, 5);

