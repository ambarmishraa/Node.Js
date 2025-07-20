const http = require('http');
const userRequestHandler = require('./user');

const server = http.createServer(userRequestHandler);

const Port = 3000;
server.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})
