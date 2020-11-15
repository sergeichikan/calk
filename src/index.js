const { createServer } = require("http");
const { promises } = require("fs");

const server = createServer();

server.on("request", (req, res) => {
    console.log(req.method, req.url)
    // if (req.url === "/hello") {
    //     return res.end(`hi`);
    // }
    promises
        .readFile("./front/index.html", {encoding: "utf-8"})
        .then((index) => {
            res.end(index);
        });
});

server.listen(3000);
