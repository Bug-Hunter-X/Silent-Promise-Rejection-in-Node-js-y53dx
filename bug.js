const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Unhandled promise rejections are silent by default in Node.js.  This can be a major source of hard-to-find errors
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise rejected'));
    }, 2000);
});

myPromise.catch(error => {
    console.error('Promise rejected:', error);
});