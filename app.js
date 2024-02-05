//const weather = require('E:/com project/weather.js')
const express = require('express');

const weather = require('./weather.js');
const geo = require('./geo.js');
const app = express();
app.get('/weather',(req,res)=>{
    if (!req.query.address){
        res.send({error:'address on found'})}
        
        geo(req.query.address) // geo ekata place eka dunnham eeken return wena lat, lon deka weather eke input ekta danwa. 
        .then((data)=>{
            return weather(data.lat,data.lon)
        })
        
        .then((data)=>{
            res.send(data)
        })
        
        .catch((error)=>{
            res.send(error);
        })
    })
    app.get("/welcome",(req,res)=>{res.send("Hello from express - welcome")});
    app.get("*",(req,res)=>{res.send("page not found")});
//promises ekka call karana widha poddk adjust karala tynneh


app.listen(3000,()=>{console.log("Server is on 3000....!(app.js)")});