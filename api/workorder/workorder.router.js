const {
 getWorkOrders,
  searchWorkOrders,
  countWorkOrders
} =require('./workorder.controller');

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.get("/", checkToken,getWorkOrders);
router.get("/search/:sta_id",checkToken,searchWorkOrders);
router.get("/count/:sta_id",checkToken,countWorkOrders)

module.exports =router;

