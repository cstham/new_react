//STEPS
//1) npm init -y (y represents answer yes to every prompt and this line...
//   to generate package.json file.

//2) npm install nodemon
//3) npm install express
//4) npm install body-parser
//5) use "npm start" to start nodemon (realtime live changes)


const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send('hello world!');
});
app.listen(3000);