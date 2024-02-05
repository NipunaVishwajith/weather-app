const axios = require('axios');
const getGeo = (Location)=>{
    return new Promise((resolve,reject)=>{
        const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+Location+'&limit=5&appid=12555c871127108af1ac9c11b449398b';
        axios.get(url)
          .then(function (response) {
            // handle success
            // const country = response.data[0].country;
            // const lat = response.data[0].lat;
            // const lon =  response.data[0].lon;
            //console.log('Country = '+country + ' lat ='+lat + ' Lon ='+lon);
            resolve({name:response.data[0].country,
                lat: response.data[0].lat,
                lon: response.data[0].lon});
        })
          .catch(function (error) {
            //console.log("Unable to find.");
            reject({error:"Unable to find the location"})
          });
    })
}
module.exports = getGeo
// const Location = "London"; //methna london dunnoth london wlata adaala eewa enwa

// const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+Location+'&limit=5&appid=12555c871127108af1ac9c11b449398b';
// // Make a request for a user with a given ID
// axios.get(url)
//   .then(function (response) {
//     // handle success
//     const country = response.data[0].country;
//     const lat = response.data[0].lat;
//     const lon =  response.data[0].lon;

//     console.log('Country = '+country + ' lat ='+lat + ' Lon ='+lon);
    
// })
//   .catch(function (error) {
//     // handle error
//     console.log("Unable to find.");
//   });