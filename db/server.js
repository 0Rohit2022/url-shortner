const mongoose = require('mongoose');

mongoose.connect(process.env.db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log(err);
})