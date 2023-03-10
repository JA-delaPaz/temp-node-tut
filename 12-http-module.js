const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is the home page.");
  } else if (req.url === "/about") {
    res.write("This is a short history");
  } else {
    res.write(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for :(</p>
  <a href="/">Back</a>
  `);
  }
  res.end();
});

server.listen(5000);
