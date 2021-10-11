const bodyParser = require('body-parser');
const  {productDAO } = require('./lib/app/database/productDAO.js');
const  {product } = require('./lib/app/model/product.js');


const express =require('express');
const app = express()
const port = 3000


const dbHost ="localhost"
const dbPort = 3306
const dbUsername = "root"
const dbPassword = "root"


app.use(express.json());

app.use(express.urlencoded({ extended: false }))


// CORS Middleware 
app.use(function (req, res, next) { 
    // Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"); 
    next(); 
});




app.get('/products', function (_req, res)
{
    let dao = new productDAO(dbHost,dbPort,dbUsername,dbPassword);
    dao.findAll(function (artists){
        res.json(artists);
    });
   
   
})


app.get('/products/:id', function (_req, res)
{
    let dao = new productDAO(dbHost,dbPort,dbUsername,dbPassword);
    dao.findById(_req.params.id,function (product){
        res.json(product);
    });

   
})

app.delete('/products/delete/:id', function (_req, res)
{
    let dao = new productDAO(dbHost,dbPort,dbUsername,dbPassword);
    dao.deleteById(_req.params.id,function (product){
        res.json(product);
    });

   
})

app.post('/products/addProduct', function (_req, res)
{
    let dao = new productDAO(dbHost,dbPort,dbUsername,dbPassword);

    let prod = new product(null,_req.body.name,_req.body.desc,_req.body.price);
    dao.addProduct(prod,function (product){
        res.json(product);
    });

   
})

app.put('/products/updateProduct', function (_req, res)
{
    let dao = new productDAO(dbHost,dbPort,dbUsername,dbPassword);


    let prod = new product(_req.body.id,null,null,_req.body.price);
    dao.updateProduct(prod,function (product){
        res.json(product);
    });

   
})
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`);
    });
