const express  = require('express');
const app = express();
const {router,port} = require('./routers/user.router');

// app use 
app.use(router);
// app_server_listen......

app.listen(port,()=>{
    console.log(`server run seccessfuly http://localhost:${port}`);
});