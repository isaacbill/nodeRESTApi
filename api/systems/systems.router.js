const{
    getOrderBySystems
} = require('./systems.controller');

const router= require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/",checkToken,getOrderBySystems);

module.exports =router;