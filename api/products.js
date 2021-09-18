import axios from 'axios';
import express from 'express';
const router = express.Router();

router.get('/',(req,res) =>
{

	console.log("Request Received in product ");
	res.json({
		data : 
		message : 
	})
})



module.exports = router;