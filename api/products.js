const express = require('express');
const axios = require('axios');

const router = express.Router();
const {parse,stringify,toJSON,fromJSON} = require('flatted');
router.get('/',(req,response) =>
{

	console.log("Request Received in product ");
	axios.get('https://www.amazon.in/s?k=laptops&ref=nb_sb_noss_2')
	.then((res) =>
	{
		console.log("Res received");
		console.log(res);
		
		response.json({
			data : res.data,
			message : "Data extracted succesfully"
		})
	})
	.catch((err) =>
	{
		console.error(err);
	})
	 
})



module.exports = router;