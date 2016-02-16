var swagger = require('swagger-server');
var server = swagger('../samples/full_sample.yaml');

server.listen(8000, function() {
  console.log('Your REST API is now running at http://localhost:8000');
});
