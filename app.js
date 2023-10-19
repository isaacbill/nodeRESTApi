const expresss= require('express');
const app = expresss();
require('dotenv').config();
const userRouter= require("./api/users/user.router")
const workOrderRouter = require("./api/workorder/workorder.router");


app.use (expresss.json());

app.use("/api/users",userRouter);
app.use("/api/workorders",workOrderRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on PORT: ", process.env.APP_PORT);
});