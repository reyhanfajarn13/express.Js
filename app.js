const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',routerAdmin.routes);

app.use('/shop',routerShop);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});



app.listen(3000);