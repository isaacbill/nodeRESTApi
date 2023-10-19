const {
 getWorkOrders,
  searchWorkOrders,
  countWorkOrders
} =require('./workorder.controller');

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/", checkToken,getWorkOrders);
router.get("/search",checkToken,searchWorkOrders);
router.get("/count",checkToken,countWorkOrders)

module.exports =router;

