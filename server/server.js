const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request", req.url);

  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  let extname = String(path.extname(filePath)).toLowerCase();
  let mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "text/json",
  };

  let contentType = mimeTypes[extname] || "application/octet-stream";
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code) {
        fs.readFile("./404.html", (err, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end("sorry, check with website admin for the error: " + err.code);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data, "utf-8");
    }
  });
});
server.listen(3000);
console.log("server is running at http://127.0.0.1:3000");
