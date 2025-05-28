const expres=require('express');
const connection = require('./modules/connection');
const app=expres();
app.use(expres.json());
PORT=4300;



app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));