const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter =require('./Routers/AuthRouter');
const ProductRouter =require('./Routers/ProductRouter')

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT||8080;


app.get('/', (req ,res)=>{
    res.send('it is woking ')
})


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter)



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})