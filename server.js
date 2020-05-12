//var https=require('http');
//var fs=require('fs');
//https.createServer(function(req, res) {
   // res.writeHead(200,{'Content-Type':'text/html'});
    //var myStream=fs.createReadStream(__dirname+"/"+'index.html','utf8');
   // myStream.pipe(res);

//}).listen(3000);

const express = require("express");
const app = express();
app.use(express.json())

const port = process.env.PORT || 1150;
app.listen(port, () => {
  console.log('server is running on port: ', port);
});

app.get('/', (req, res) => {      
    res.sendFile(__dirname+"/"+"index.html")
});
