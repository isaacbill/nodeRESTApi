const{
    getOrderBySystems, 
    findByOpenStatus,
    findByNewStatus,
    findByPendingStatus,
    findByOverdueStatus,
    findByClosedStatus

} = require('./systems.controller');

const router= require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/",checkToken,getOrderBySystems);
router.get("/resolution-by-system/open/:systemName",checkToken,findByOpenStatus);
router.get("/resolution-by-system/new/:systemName",checkToken,findByNewStatus);
router.get("/resolution-by-system/closed/:systemName",checkToken,findByClosedStatus);
router.get("/resolution-by-system/pending/:systemName",checkToken,findByPendingStatus);
router.get("/resolution-by-system/overdue/:systemName",checkToken,findByOverdueStatus);
module.exports =router;