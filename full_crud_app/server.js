const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser=require("body-parser");
const path =require('path');

const connectDB = require('./server/database/connection');

const app = express();
  
dotenv.config({path:'conf.env'})
const PORT = process.env.PORT||8080

//request log
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// request body parser
app.use(bodyparser.urlencoded({extended:true}))
//set view
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))


// load router

app.use('/',require('./server/routes/router'))




app.listen(PORT,()=> {console.log(`Server is up on https://olive-caterpillar-bioie4hz.ws-eu03.gitpod.io/#/workspace/CA2_webdev:${PORT}`)});
