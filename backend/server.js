const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const users  = require('../api/users');
const products = require('../api/products');
const app = express(); 
require('./database');

app.use('/api/users',users);
app.use('/api/products',products);
app.use(express.static(path.join(__dirname, '/'))); 
const port = process.env.PORT || 5000;
app.get('*',(req,res) =>
{
	console.log(`Request received ${req}`);
	res.sendFile(path.join(__dirname,'../'));
})
app.listen(port,(req,res) =>
{	
	console.log(`Started server on port ${port} `)
})
