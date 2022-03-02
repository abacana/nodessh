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
var SSH = require('simple-ssh');

var ssh = new SSH({
    host: 'localhost',
    user: 'username',
    pass: 'password'
});

const { Client } = require('ssh2');
const conn = new Client();
var status= 'ppppp';
conn.on('ready', () => {
    console.log("sdfsdfs")
}).on('error', (err) => {
    console.log("99999")
}).connect({
    host: '14.161.48.144',
    port: 22,
    username: 'admin',
    password: 'admin'
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