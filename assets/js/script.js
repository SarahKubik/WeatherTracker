const APIURL = 'https://openweathermap.org/api/one-call-api';
async function getWeatherbyLocation (location){
    const resp =await fetch(APIURL+'/location/search/?query='+location);
    const respData = await resp.json()

    console.log(respData);
}
getWeatherbyLocation('Detroit');