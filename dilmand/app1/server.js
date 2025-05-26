const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample todo data
const todos = [
  { id: 1, title: 'Learn Docker', completed: false },
  { id: 2, title: 'Build Microservices', completed: true },
  { id: 3, title: 'Deploy to Cloud', completed: false }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: process.env.SERVICE_NAME });
});

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Add new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Toggle todo completion
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  todo.completed = !todo.completed;
  res.json(todo);
});

app.listen(port, () => {
  console.log(`${process.env.SERVICE_NAME} listening at http://localhost:${port}`);
});