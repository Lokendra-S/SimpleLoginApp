const express = require('express');
const app=express();
const session=require('express-session');
const path=require('path');

const PORT=3000;
const mainRoute=require('./routes/MainRoute');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.set("views",path.join(__dirname,"views"));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(mainRoute);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port : ${PORT}`)
});