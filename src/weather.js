const API_WEATHER = 'https://api.openweathermap.org/data/2.5/forecast'
const API_KEY = '***';

async function getWeather(lat, lon) {
  const res = await fetch(API_WEATHER + `?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  const js = await res.json();
  const result = js.list.map(x => {
    return {
      date: new Date(x.dt * 1000),
      weather: x.weather[0].main,
      temp: x.main.temp,
      humidity: x.main.humidity,
      pressure: x.main.pressure
    }
  });

return result;
}

export { getWeather };