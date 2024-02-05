const axios = require('axios');
// const lat = 44.34;
// const lon = 10.99;

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=12555c871127108af1ac9c11b449398b';
// // Make a request for a user with a given ID
// axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response.data.weather[0].description);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

// den meeka promises ekk widhta function karala 

  const getweather = (lat,lon)=>{
    return new Promise((resolve,reject)=>{
       

            const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=12555c871127108af1ac9c11b449398b';
                axios.get(url)
                    .then(function (response) {
                    //console.log(response.data.weather[0].description);
                    resolve({weather:'Weather :'+response.data.weather[0].description});
                    })
                    .catch(function (error) {
                    //console.log(error);
                    reject({error:"Unable to find the location"})
                    });
                })
    }
    module.exports = getweather