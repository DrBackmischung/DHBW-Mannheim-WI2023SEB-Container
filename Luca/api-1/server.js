const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

const subreddits = [
  'funny',
  'Unexpected',
  'AnimalsBeingDerps',
  'instant_regret',
  'ContagiousLaughter',
  'kidsarefuckingstupid',
];

// 🎥 Random Reddit Video Endpoint
app.get('/random-video', async (req, res) => {
  const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=50`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const posts = data.data.children;

    const videoPost = posts.find(post =>
      post.data.is_video && post.data.media?.reddit_video?.fallback_url
    );

    if (videoPost) {
      res.send({
        subreddit: subreddit,
        title: videoPost.data.title,
        videoUrl: videoPost.data.media.reddit_video.fallback_url,
        postUrl: `https://reddit.com${videoPost.data.permalink}`,
      });
    } else {
      res.status(404).send({ error: 'Kein Video gefunden, versuch es nochmal!' });
    }
  } catch (error) {
    console.error('Fehler beim Abrufen des Videos:', error);
    res.status(500).send({ error: 'Ups! Etwas ist schiefgelaufen.' });
  }
});

// Test-Endpoints von vorher
app.get('/ping', (req, res) => res.send({ message: 'pong 🎾' }));

app.listen(PORT, () => {
  console.log(`🎬 Random Video Server läuft auf Port ${PORT}`);
});
