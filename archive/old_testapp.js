const http = require('http');

const hostname = '0.0.0.0';
// this port must be 8000 for the CSCLUB site to forward 80 properly. This means 80<->8000 in the iptables rules.
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World there, this is Luca');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
