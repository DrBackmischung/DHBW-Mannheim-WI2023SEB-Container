const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Health-Check
app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });