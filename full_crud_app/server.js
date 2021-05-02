const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser=require("body-parser");
const path =require('path');


const app = express();

dotenv.config({path:'conf.env'})
const PORT = process.env.PORT||8080

//request log
app.use(morgan('tiny'));
// request body parser
app.use(bodyparser.urlencoded({extended:true}))
//set view
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))

app.get('/',(req,res)=>{
    res.render('index');
})
//app.use('/', require('./server/routes/router'))




app.listen(PORT,()=> {console.log(`Server is up on http://localhost:${PORT}`)});
