const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    res.render('index',{myData});
});

router.get('/about',(req, res)=>{
    res.render('about',{myData});
});
router.get('/education',(req, res)=>{
    res.render('education',{myData});
});
router.get('/workexperience',(req, res)=>{
    res.render('workexperience',{myData});
});
router.get('/skill',(req, res)=>{
    res.render('skill',{myData});
});

module.exports = router;