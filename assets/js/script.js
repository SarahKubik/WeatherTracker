const apikey = "c572c0ecfa50161e5b2d94a57854c073"; 
const url = (location) =>
 `https://api.openweathermap.org/data/2.5/weather?q=Detroit,us&APPID=c572c0ecfa50161e5b2d94a57854c073`;

 async function getWeatherbyLocation(location) {
    const resp = await fetch(url(location), {
        origin:"cors"});
    const respData = await resp.json();

    console.log(respData);
}
getWeatherbyLocation("Detroit");