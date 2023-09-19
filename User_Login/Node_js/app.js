// var http = require("http");
// var servercreate = http.createServer(function(request, response){
//     console.log("Server working fine")
// });
// servercreate.listen(3000)

const express = require("express");
const database = require("./Src/database/database");
const router = require("./Src/router/route");
const app = express();
app.listen(3000, () => {
  console.log("server listening 3000 port");
});