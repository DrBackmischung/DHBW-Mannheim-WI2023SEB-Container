const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/random-meme', async (req, res) => {
  try {
    const response = await fetch('https://meme-api.com/gimme');
    const data = await response.json();

    res.send({
      source: 'meme-api',
      title: data.title,
      subreddit: data.subreddit,
      memeUrl: data.url,
      postUrl: data.postLink,
    });
  } catch (error) {
    console.error('Fehler bei Meme-API:', error);
    res.status(500).send({ error: 'Meme-API nicht erreichbar' });
  }
});

// Ping-Test
app.get('/ping', (req, res) => res.send({ message: 'pong 🎾' }));

app.listen(PORT, () => {
  console.log(`🎬 Random Video Server läuft auf Port ${PORT}`);
});
