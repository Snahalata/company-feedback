const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const morgan = require ('morgan');

//user library import
const feedback = require('../server/routes/feedback.controller');

//creating the server
const app = express();

//handling the middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

//Routing to feedback
app.use('/feedback',feedback);


//error handling
app.use((error,req,res,next) =>{
    res.json({status:false, message: "error"+ error});
});

//listening on the port
app.listen(3000,() =>{
    console.log('server started on port 3000');
});