const express = require('express');

const router = express.Router();

router.get('/user',(req,res,next)=>{
    res.send("<form action='/user-input' method='POST'><input type='text' name='username'><button type='submit'>Add</button></form>");
})

router.post('/user-input',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;