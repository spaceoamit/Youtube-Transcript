import express from 'express';
import { YoutubeTranscript } from 'youtube-transcript';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('input');
});

app.post('/fetch-transcript', (req, res) => {
  const youtubeUrl = req.body.youtubeUrl;
  YoutubeTranscript.fetchTranscript(youtubeUrl)
    .then(transcript => {
      const fullText = transcript.map(entry => entry.text).join(' ');
      res.send(fullText);
    })
    .catch(error => {
      res.status(500).send('Error fetching transcript: ' + error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});