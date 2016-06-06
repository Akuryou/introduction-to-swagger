var swagger = require('swagger-server');
var Resource = swagger.Resource;
var server = swagger('../samples/full_sample.yaml');

server.dataStore.save([
  new Resource('/v1/users/1', {name: 'Bob', email: 'bob@example.com', dateJoined: '2016-01-01'}),
  new Resource('/v1/users/2', {name: 'Joe', email: 'joe@example.com', dateJoined: '2016-01-02'})
]);

server.listen(8000, function() {
  console.log('Your REST API is now running at http://localhost:8000');
});
