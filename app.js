const expresss= require('express');
const app = expresss();
require('dotenv').config();
const userRouter= require("./api/users/user.router");
const workOrderRouter = require("./api/workorder/workorder.router");
const systemsRouter = require("./api/systems/systems.router");
const reportsRouter = require('./api/reports/reports.router');

app.use (expresss.json());

app.use("/api/users",userRouter);
app.use("/api/workorders",workOrderRouter);

app.use("/api/systems",systemsRouter);
app.use("/api/reports",reportsRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on PORT: ", process.env.APP_PORT);
});