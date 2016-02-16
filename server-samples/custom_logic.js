var swagger = require('swagger-server');
var Resource = swagger.Resource;
var server = swagger('../samples/full_sample.yaml');

server.post('/v1/users/', function(req, res, next) {
  if(req.body.email.indexOf('@') === -1) {
    res.status(400).send('Invalid email');
  } else {
    next();
  }
});

server.listen(8000, function() {
  console.log('Your REST API is now running at http://localhost:8000');
});
