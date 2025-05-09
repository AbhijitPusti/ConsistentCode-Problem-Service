const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/sever.config');
const apiRouter = require('./routes');

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


app.listen(PORT, () =>{
    console.log(`Server started at PORT: ${PORT}`);
})