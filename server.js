//STEPS
//1) npm init -y (y represents answer yes to every prompt and this line...
//   to generate package.json file.
//2) npm install nodemon
//3) npm install express
//4) npm install body-parser (to parse json with express)
//5) npm install bcrypt-nodejs (to hash passwords)
//6) npm install cors (to connect front-end to back-end)
//7) npm install knex (database)
//8) npm install pg (install postgresql in knex)
//		-refer to https://knexjs.org/ based on database type
//9) use "npm start" to start nodemon (realtime live changes)


//BACKEND INSTALLATION
//1) install postman (to test server connections)
//2) install postgresql relational database

const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send('hello world!');
});
app.listen(3000);