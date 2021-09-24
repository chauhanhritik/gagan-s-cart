const express = require('express');
const router = express.Router();
const Shopping = require('../models/shopping');
router.use(express.json());
router.post("/", (req, res) => {

	const { pid, pname, pprice,pimage } = req.body;


	const newProduct = new Shopping({
		pid: pid,
		pname: pname,
		pprice: pprice,
		pimage : pimage,
	})
	newProduct.save()
		.then((response) => res.status(200).json({
			message: "updated cart succefully",
			response: response
		}))
		.catch((err) => {

			res.status(400).json({
				error: err,
				message: "Error updating cart"
			})
		})
})
router.get('/', (req, res) => {
	Shopping.find({}, (err, result) => {
		!err ? res.status(200).json({ data: result, message: 'data fetched succesfully' }) : res.status(400).json({ error: err })
	})

})

router.delete('/',(req,res) =>
{
	 
	Shopping.deleteOne({pid : req.query.pid},(err,result) =>
	{
		!err ? res.status(200).json({ data: result, message: 'data deleted succesfully' }) : res.status(400).json({ error: err })
	})
})

module.exports = router;