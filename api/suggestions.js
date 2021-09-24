const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => {
 
	var config = {
		method: 'get',
		url: `https://completion.amazon.co.uk/api/2017/suggestions?session-id=262-8196904-4831024&customer-id=A38IJI8WJ67FAS&request-id=61KGVJ3SW42ABPH9F4NC&page-type=AmazonStores&lop=en_IN&site-variant=desktop&client-info=amazon-search-ui&mid=A21TJRUUN4KGV&alias=aps&ks=undefined&prefix=${req.query.data}&event=onFocusEmptySearchTerm&limit=11&b2b=0&fresh=0&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1632250418736`,
		headers: {

			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',

		}
	};

	axios(config)
		.then(function (response) {
			 
			res.json({
				data : response.data,
				message : "Suggestions extracted"
			})
		})
		.catch(function (error) {
			console.log(error);
		});
});
module.exports = router;