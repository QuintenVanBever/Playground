let http = require("http");
let fs = require("fs");
let marked = require("marked");

let handleRequest = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.readFile("blog_files/first.md", "utf-8", function (error, data) {
    if (error) {
      response.writeHead(404);
      respone.write("Whoops! File not found!");
    } else {
      response.write(marked.parse(data)); // This only show the HTML, Using node JS is not the correct way to do this, since node is for server side
    } // if you build HTML in node, it is a fine solution however
    response.end();
  });
};

http.createServer(handleRequest).listen(8000);
