// var http = require("http");
// var servercreate = http.createServer(function(request, response){
//     console.log("working")
// });
// servercreate.listen(3000)

const express = require("express");
const database = require("./Src/config/database");
const routerfile = require("./Src/router/userrouter");
const bodyParser = require('body-parser');
const router = require("./Src/router/userrouter");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    limit:"50mb",
    extended: true
}))

app.use(routerfile);
app.listen(3000, () => {
  console.log("server listening 3000 port");
});