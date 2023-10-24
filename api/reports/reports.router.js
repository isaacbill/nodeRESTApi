const{
 getGeneralReport,
 findReportByCategory
}= require('./reports.controller');
const router= require("express").Router();
const {checkToken} = require("../../auth/token_validation");


router.get("/",checkToken,getGeneralReport);
router.get("/resolution-by-category/:category_id",checkToken,findReportByCategory);

module.exports =router;