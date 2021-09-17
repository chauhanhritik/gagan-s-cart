const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.use(express.json());
router.get('/',(req,res) =>
{
	console.log("REQUEST ");
	console.log(req.query);
	const {email,password} = req.query;
	User.findOne({email : email,password : password },(err,result) =>
	{
		if(!result)
			return res.status(404).json({
				data : {},
				message : "No such user exit"
			});
		if(!err)
		{
			return res.status(200).json({
				data : result,
				message : "Account Found"
			});
		}
		else
		{
			return res.status(400).json({
				data : {},
				message : "Error encountered."
			})
		}
	})
	
});

module.exports = router;
