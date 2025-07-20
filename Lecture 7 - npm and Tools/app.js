const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received', req);
});

const Port = 3000;
server.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})