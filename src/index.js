const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/sever.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/ErrorHandler');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text());

//if any request comes and route starts with /api, we map it to apiRouter
app.use('/api',apiRouter);

app.get('/ping', (req,res) => {
    console.log("Hello");
    return res.json({message:'Problem Service is alive'});
});

//last middleware if any error comes
app.use(errorHandler)

app.listen(PORT, async () =>{
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to DB");
    
})