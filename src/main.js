const http = require("http");
const comment = require("./comment.js");

const host = 'localhost';
const port = 8000;

const requestListener = function (request, response) {
    switch (request.url) {
        case "/api/comments":
            var body = ''
            request.on('data', function(data) {
                body += data
            })
            request.on('end', function() {
                comment.processComment(JSON.parse(body))
                response.setHeader("Content-Type", "application/json");
                response.writeHead(200);
                response.end(body)
            })
            break
        default:
            response.writeHead(404);
            response.end();
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.info(`Server is running on http://${host}:${port}`);
});
