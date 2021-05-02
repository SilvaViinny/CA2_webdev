const express = require('express');

const app = express();

const PORT = process.env.PORT||8080

app.get('/',(req,res)=>{
    res.send("The orange tree coffee shop - Menu");
})



app.listen(PORT,()=> {console.log("Server is up on http://localhost:${PORT}")});
