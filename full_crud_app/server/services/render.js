const axios = require('axios');


//exports.homeRoutes = (req, res) => {
  //res.render('index',{menu:"new Data"});

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/item
    axios.get('http://localhost:3000/api/item')
        .then(function(response){
            res.render('index',{menu:response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_item = (req, res) =>{
    res.render('add_item');
}

exports.update_item = (req, res) =>{
    axios.get('http://localhost:3000/api/item', { params : { id : req.query.id }})
        .then(function(menudata){
            res.render("update_item", { menu : menudata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}