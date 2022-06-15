const path = require('path');
const rootDir = require('../utils/path');

const express = require('express');

const router = express.Router();

// /admin/user => GET
router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(__dirname, '../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// /admin/user to /user-input => POST
router.post('/add-product-input',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;