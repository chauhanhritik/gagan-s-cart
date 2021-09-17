const mongoose = require('mongoose');
const connection = "mongodb+srv://gagan:gagan@cluster0.t97jy.mongodb.net/userLoginPage?retryWrites=true&w=majority"
mongoose.connect(connection,{useNewUrlParser : true, useUnifiedTopology : true})
	.then(() => console.log('Database Connected Succesfully'))
	.catch(err => console.log(err));

