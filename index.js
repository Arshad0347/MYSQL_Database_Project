const expres=require('express');
const connection = require('./modules/connection');
const app=expres();
app.use(expres.json());
PORT=4300;

//Employee hiring
app.post('/addUser',(req,rest)=>{
    const employee={
        fullname:req.body.fullname,
        salary:req.body.salary,
        city:req.body.city,
        email:req.body.email
    }
    // console.log(employee);
    const sql="INSERT INTO `employeedata` SET ?";
    connection.query(sql,employee,(error,result)=>{
        if(error){
            console.log(error);
        }else(
            console.log("Employee added successfully")
        )
    })
    
})

//Get employee data
app.get('/getUsers',(req,rest)=>{
    const sql="SELECT * FROM `employeedata`";
    connection.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            rest.send(result);
        }
    })
})


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));