const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('../api/users');
const products = require('../api/products');
const suggestions = require('../api/suggestions');
const productDetails = require('../api/productDetails');
const shopping = require('../api/shopping');
const app = express();
require('./database');

app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/products/details',productDetails);
app.use('/api/suggestions',suggestions);
app.use('/api/shopping',shopping);
app.use(express.static(path.join(__dirname, '/')));
const port = process.env.PORT || 5000;
app.get('*', (req, res) => {

	res.sendFile(path.join(__dirname, '../'));
})
app.listen(port, (req, res) => {
	console.log(`Started server on port ${port} `)
})
