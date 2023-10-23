const{
 getGeneralReport
}= require('./reports.controller');
const router= require("express").Router();
const {checkToken} = require("../../auth/token_validation");
const { Router } = require('express');

router.get("/",checkToken,getGeneralReport);

module.exports =router;