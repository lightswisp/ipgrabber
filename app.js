const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs')

app.set('trust proxy', true)

app.use('/', function(req, res){
    res.send('Ok!')
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip
    fs.appendFileSync("ip.txt", `${ip}\n`);
})

app.get('/ip.txt', function(req, res){
    res.sendFile(path.join(__dirname+"/ip.txt"))
})

app.listen(3000, () =>{
console.log('listening on port 3000')
})