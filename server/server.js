const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 3000;
const app = express;

app.use(bodyParser.json());
app.use(cors());
app.get('/', function(req , res){
    res,send('Hello from the server');
});
app.post('/enroll' , function(){
    console.log(req.body);
    req.status(200).send({'message' : 'Data Received!'});
})
app.listen(PORT , function(){
    console.log('Server is running in locahost:', PORT);
});


