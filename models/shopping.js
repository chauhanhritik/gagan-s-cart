const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//
const shoppingSchema = new Schema({
	pid:
	{
		type: String,
		required: true
	},
	puser:
	{
		type : String,
		require  : true,	
	},
	pname:
	{
		type: String,
		required: true
	},
	pprice:
	{
		type: String,
		required: true

	},
	pimage : 
	{
		type : String,
		required : true
	}

})
module.exports = mongoose.model("Shopping", shoppingSchema,"cart");