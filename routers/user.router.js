const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const { users,createPost } = require('../controller/user.controler');

// app__use.........

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
router.use(helmet()); 
router.use(cors());

// app_router..........

router.get('/users',users);
router.post('/users',createPost);

// app_router_error.....

router.use((req,res)=>{
    res.status(404).json({
        message:"this is url invated....."
    });
});

// app_server_error.....

router.use((err,req,res)=>{
    res.status(500).json({
        message:"server is down....."
    });
});


module.exports ={router,port};