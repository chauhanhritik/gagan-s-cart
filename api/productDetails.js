const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
	// console.log(req.query);
	const { asin, name } = req.query;
	console.log(asin,name)
	var config = {
		method: 'get',
		url: `https://www.amazon.in/${name}/dp/${asin}`,
		headers: {

			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',

		}
	};
	axios(config)
		.then((response) => {
		 
			res.json({
				data: response.data
			});
		})
		.catch((error) => {
			console.log("ERROR");
			res.json({
				error : error
			})
		})
})
module.exports = router;