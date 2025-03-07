import './style.css';
import { getWeather } from './weather.js';
import { updateTable, updateGraph } from './views.js';

async function findWeather() {
    const inputAddress = document.getElementById('input-address');
    const address = inputAddress.value;
    document.getElementById('city').textContent = address;


    const forecast = await getWeather(35, 135);
    updateTable(forecast);
    updateGraph(forecast);
}

document.getElementById('find-weather').onclick = findWeather;
