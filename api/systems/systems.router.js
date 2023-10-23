const{
    getOrderBySystems, 
    findByOpenStatus
} = require('./systems.controller');

const router= require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/",checkToken,getOrderBySystems);
router.get("/resolution-by-system/open/:systemName",checkToken,findByOpenStatus);

module.exports =router;