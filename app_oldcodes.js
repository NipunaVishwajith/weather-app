//const weather = require('E:/com project/weather.js')
const weather = require('./weather.js');
const geo = require('./geo.js');

// weather(13,94) 
// .then((data)=>{
//     console.log(data);
// })

// .catch((error)=>{
//     console.log(error);
// })

// geo('London') 
// .then((data)=>{
//     console.log(data);
// })

// .catch((error)=>{
//     console.log(error);
// })

//promises ekka call karana widha poddk adjust karala tynneh
geo('Kilinochchi') // geo ekata place eka dunnham eeken return wena lat, lon deka weather eke input ekta danwa. 
.then((data)=>{
    return weather(data.lat,data.lon)
})

.then((data)=>{
    console.log(data)
})

.catch((error)=>{
    console.log(error);
})