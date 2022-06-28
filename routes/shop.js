const path = require('path');

const rootDir = require('../utils/path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();
router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/items',(req,res) => {
    const listItem = adminData.products

    res.send (listItem);
})

module.exports = router;