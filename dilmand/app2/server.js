const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Sample weather data
const weatherData = {
  'Mannheim': { temperature: 22, condition: 'Sunny', humidity: 65 },
  'Heidelberg': { temperature: 21, condition: 'Cloudy', humidity: 70 },
  'Karlsruhe': { temperature: 23, condition: 'Sunny', humidity: 60 }
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: process.env.SERVICE_NAME });
});

// Get weather for all cities
app.get('/weather', (req, res) => {
  res.json(weatherData);
});

// Get weather for specific city
app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  const weather = weatherData[city];
  if (!weather) return res.status(404).json({ error: 'City not found' });
  res.json({ city, ...weather });
});

// Update weather for a city
app.post('/weather/:city', (req, res) => {
  const city = req.params.city;
  const { temperature, condition, humidity } = req.body;
  
  weatherData[city] = { temperature, condition, humidity };
  res.status(201).json({ city, ...weatherData[city] });
});

app.listen(port, () => {
  console.log(`${process.env.SERVICE_NAME} listening at http://localhost:${port}`);
});