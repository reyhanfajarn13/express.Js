const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',routerAdmin);

app.use(routerShop);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});



app.listen(3000);