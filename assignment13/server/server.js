//express JS to make calls to server
var express = require('express');

var app = express();

//
var mongoose = require('mongoose');

var bodyParser = require('body-parser')
var path = require('path');

//MONGO DB CLOUD (cloud.mongodb.com)

    // create account, create cluster, add user, whitelist, copy connection url
var dbURL = "mongodb+srv://vivek:kumar@cluster0-yl4xz.mongodb.net/test?retryWrites=true&w=majority";

    app.use(express.static(path.join(__dirname, 'build')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

const Product = mongoose.model('product', {
        "id": Number,
        "product": {
                    "productid": Number,
                    "category": String,
                    "price": Number,
                    "name": String,
                    "instock": Boolean
                    }
})

var objects = {
    '1':  {id: 1, category: "Home", price: "$74.99999999", name: 'Lock and key'},
    '2': {id: 2, category: "Home", price: "$149.999999", name: 'smart Utensils'},
    '3': {id: 3, category: "Home", price: "$124.999999", name: 'Audio System'},
    '4': {id: 4, category: "Furniture", price: "$969.00", name: 'Recliner'},
    '5': {id: 5, category: "Furniture", price: "$153.00", name: 'chair'},
    '6': {id: 6, category: "Furniture", price: "$120.00", name: 'bean bag'}
};

var object = {
    "id": 0,
    "product": {
       "productid": 0,
       "category": "",
       "price": 0,
       "name": "",
       "instock": true
    
    }
}   


app.get('/product/get/', function (req, res) {
        Product.find({}, (err, products) => {
            console.log(products)
            res.send(products);
        });
});


//create ds
app.post('/product/create', function (req, res) {
    const newProduct = req.body.product;
    if(newProduct){
        const product = new Product({
            id: newProduct.id,
            product: {
                productid: newProduct.id,
                category: newProduct.category,
                price: newProduct.price,
                name: newProduct.name,
                instock: !!newProduct.instock
            }
        });
        product.save((err) => {
            if(err){
                res.sendStatus(500);
            }
        });
        res.sendStatus(200);
    }
    else {
        res.sendStatus(500);
    }
});


//delete
app.delete('/product/delete/:id', function (req, res) {
    const id = req.params.id;

    if(id){
        Product.deleteOne({ id }, function (err) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(500);
    }
});

//add
app.put('/product/update/:id', function (req, res) {
    const id = req.params.id;
    Product.updateOne({ id }, req.body.product, function(err, res) {
    });
    res.sendStatus(200);
});



//mongoose
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log("connected");
})

var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
});