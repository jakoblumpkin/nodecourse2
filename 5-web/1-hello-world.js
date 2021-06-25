const http = require('http');

const requestListener = (req, res) => {
  console.log(req.url);
  res.write('Hello Wod\n');
  res.end();
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
