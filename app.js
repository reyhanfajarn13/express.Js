
const express = require('express');
const bodyParser = require('body-parser');

const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(routerAdmin);

app.use(routerShop);
app.use((req,res,next) => {
    res.status(404).send("<h1>404 <br>PAGE NOT FOUND</br></h1>");
})



app.listen(3000);