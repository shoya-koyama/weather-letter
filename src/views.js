import Chart from 'chart.js/auto';

function updateTable(forecast) {
    const table = document.getElementById('table');
  
    const rows = table.querySelectorAll('tr');
    for (let i = 1; i < rows.length; i++) {
      rows[i].remove();
    }
  
    for (const item of forecast) {
      const row = document.createElement('tr');
      const date = document.createElement('td');
      date.textContent = item.date.toLocaleString();
      row.appendChild(date);
  
      const weather = document.createElement('td');
      weather.textContent = item.weather;
      row.appendChild(weather);
  
      const temperature = document.createElement('td');
      temperature.textContent = item.temperature;
      row.appendChild(temperature);
      const pressure = document.createElement('td');
      pressure.textContent = item.pressure;
      row.appendChild(pressure);
  
      const humidity = document.createElement('td');
      humidity.textContent = item.humidity;
      row.appendChild(humidity);
      table.appendChild(row);
    }
  }
  
let chart;
function updateGraph(forecast) {
  const data = {
    labels: forecast.map(x => x.date.toLocaleString()),
    datasets: [
      {
        label: 'Temparature',
        data: forecast.map(x => x.temperature)
      },
      {
        label: 'Humidity',
        data: forecast.map(x => x.humidity)
      },
    ]
  }
  if (chart === undefined) {
    const ctx = document.getElementById('graph');
    chart = new Chart(ctx, {
      type: 'line',
      data: data
    });
  } else {
    chart.data = data;
    chart.update();
  }
}

export { updateTable, updateGraph };