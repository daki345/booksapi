const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');


//connection to mongodb
mongoose.connect("mongodb+srv://daki:Daki#123@cluster0.il17x.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    () => {
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,() =>{
            console.log("server started..!!");
        })
    }
);