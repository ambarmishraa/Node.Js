const http = require('http');
const requestHandler = require('./calculator');  

const server = http.createServer(requestHandler);

const Port = 3000;
server.listen(Port, () => {
    console.log(`Server is listening on port ${Port}...`);
});