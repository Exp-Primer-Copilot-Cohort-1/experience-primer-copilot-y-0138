// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.           
// The comments.html file should be in the same directory as the comments.js file.  
// Use the fs.readFile method to read the file and send it to the client.
// The server should respond to GET requests to the /comments URL.
// Use the http module to create the server.
// The server should listen on port 3000.

const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        fs.readFile('comments.  html', (err, data) => {                                                         
            res.write(data);
            res.end();
        }
    }   
});

server.listen(3000);

// Path: comments.html
