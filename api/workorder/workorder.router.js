const {
 getWorkOrders
} =require('./workorder.controller');

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/", checkToken,getWorkOrders);

module.exports =router;

