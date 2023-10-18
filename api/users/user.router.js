const {
    createUser,
    getUserByUserId,
    getUsers,
    deleteUser,
    updateUser
} =require('./user.controller');
const router = require('express').Router();

router.post("/",createUser);
router.get("/",getUsers);
router.get("/:staff_id",getUserByUserId);
router.patch("/",updateUser);
router.delete("/",deleteUser);

module.exports= router;