const http = require("http");
const data = require("./utils/data");
//const { getCharById } = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url === "/hola") {
      res.writeHead(200, "Content-type: text/plain");
      res.end("Hola");
    } else if (url.includes("/shop")) {
      res.writeHead(200, "Content-type: application/json");
      res.end(JSON.stringify(data));
    }
  })
  .listen(3001, "localhost");
