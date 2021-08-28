// http modules
const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        response.end(content);
      }
    );
  } else if (request.url == "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        response.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
