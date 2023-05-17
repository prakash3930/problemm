const path = require('path');
const { v4:uddiv4} = require('uuid');
const {user} = require('../modules/users.module.js');

exports.users = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/user.html"));
};

exports.createPost = (req,res)=>{
  const name = req.body.name;
   const age = Number(req.body.age);
   let userU = {
    id:uddiv4(),
    name:name,
    age:age,
   };



   user.push(userU);
   userU={}

  res.status(201).json({
    successful:true,
    user,
  });
  res.send('<script>document.querySelector("#myForm").reset();</script>');
};
