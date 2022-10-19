const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;
require('../db/server')
const allrouters = require('../routers/routers')
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))
app.use('/', allrouters);

app.listen(PORT, () => {
    console.log(`Server is running live on port no.${PORT}`);
})   