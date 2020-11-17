const { createServer } = require("http");
const { promises } = require("fs");

const server = createServer();

const getRawBody = (req) => {
    return new Promise((resolve) => {
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    });
};

server.on("request", async (req, res) => {
    console.log(req.method, req.url);
    if (req.method === "GET") {
        // if (req.url === "/index.html") {
        //     return promises
        //         .readFile("./front/index.html", {encoding: "utf-8"})
        //         .then((index) => res.end(index));
        // }
        // if (req.url === "/index.js") {
        //     return promises
        //         .readFile("./front/index.js", {encoding: "utf-8"})
        //         .then((index) => res.end(index));
        // }
    }
    if (req.method === "POST") {
        const body = await getRawBody(req);
        res.end(body);
        // getRawBody(req).then((body) => res.end(body));
    }
});

server.listen(3000);
