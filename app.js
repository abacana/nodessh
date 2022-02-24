const express = require("express");
const axios = require('axios')
const cors = require('cors')
const http = require('http');
const port = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.post("/checker", async (req, res, next) => {
    if (req.media !== undefined && req.media !== null){
        res.status(200).json({errorCode: 0, message: "OK", data:req.media})
    }else{
        res.status(200).json({errorCode: 1, message: 'No file were uploaded.', errors:{}})
    }
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port `+port);
    console.log(`http://localhost:${port}`);
});