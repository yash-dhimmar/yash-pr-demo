const express = require('express')
const path = require('path');
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const app = express()
const database = require('./config/database')
// global.db = Database.databaseConnect();

const http = require('http');

app.use(express.json());

app.use(
    bodyParser.json({
      limit: '50mb'
    })
  );
  
app.use(
    bodyParser.urlencoded({
    limit: '50mb',
    extended: true
 })
);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
//module.exports = app;

require('./routes/index').routerConfig(app);


const promise = new Promise((resolve, reject) => {
    // setTimeout(resolve, 100, 'foo');
    server = http.Server(app);
    resolve();
});
  

Promise.all([promise]).then(values => {
    server.listen(3006, () => {
        console.log("server is listening on 3006")
    })
    database.Connect().then(() => {
        console.log(`database  Connected`);
    });
})













// require("dotenv").config();
// const express = require("express");
// const app = express();
// const userRouter = require("./users/userrouter");

// app.use(express.json());

// app.use("/users", userRouter);

// app.listen(5002,()=>{
//          console.log("server is running")

// })


// const express = require ('express')
// //const pool = require('./config/database');

// const app = express()
// const userRouter = require("./users/userrouter");
// app.use(express.json());

// app.use("/users",userRouter)


// app.listen(5002,()=>{
//     console.log("server is running")
// })