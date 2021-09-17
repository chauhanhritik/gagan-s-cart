const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const user  = require('../models/user')
const app = express();
app.use('api/users','../api/users');
app.use(user);

const port = process.env.PORT || 5000;
app.listen(port,(req,res) =>
{
	
})
