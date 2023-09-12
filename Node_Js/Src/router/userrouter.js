const express = require('express')

const router = express.Router();

const userControler=require('../controller/usercontroler')

router.post('/creater/user', userControler.createuser)
router.get('/get/user/details',userControler.getUser)

module.exports=router;