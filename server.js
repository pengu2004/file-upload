const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.listen(8080, () => {
  console.log("Server is active");
});

server.on("request", (req, res) => {
  if (req.url == "/" && req.method == "GET") {
    return res.end(fs.readFileSync(__dirname + "/front.html"));
  }
});

server.on("request", (req, res) => {
  if (req.url.split("?")[0] == "/upload" && req.method == "POST") {
    const query = new URLSearchParams(req.url);
    const fileName = query.get("/upload?fileName");
    req.on("data", (chunk) => {
      fs.appendFileSync(fileName, chunk);
    });
    return res.end("Yay");
  }
});
