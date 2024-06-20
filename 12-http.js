const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  } else if (req.url === "/about") {
    res.end("Welcome to about page");
  } else {
    res.end(`
    <h1>Oops</h1>
    <p>Page not found</p>
    <a href="/">Go back home</a>
    `);
  }
});

server.listen(5000);
