const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: process.env.SERVICE_NAME });
});

// Todo routes
app.get('/api/todos', async (req, res) => {
  try {
    const response = await axios.get('http://app1:3001/todos');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

app.get('/api/todos/:id', async (req, res) => {
  try {
    const response = await axios.get(`http://app1:3001/todos/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todo' });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const response = await axios.post('http://app1:3001/todos', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating todo' });
  }
});

app.patch('/api/todos/:id', async (req, res) => {
  try {
    const response = await axios.patch(`http://app1:3001/todos/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error updating todo' });
  }
});

// Weather routes
app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get('http://app2:3002/weather');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.get('/api/weather/:city', async (req, res) => {
  try {
    const response = await axios.get(`http://app2:3002/weather/${req.params.city}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching city weather' });
  }
});

app.post('/api/weather/:city', async (req, res) => {
  try {
    const response = await axios.post(`http://app2:3002/weather/${req.params.city}`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error updating weather data' });
  }
});

app.listen(port, () => {
  console.log(`${process.env.SERVICE_NAME} listening at http://localhost:${port}`);
});