const express = require('express');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const directory = path.dirname(filePath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

app.post('/download', async (req, res) => {
  try {
    const { url, format } = req.body;

    if (!url || !format) {
      return res.status(400).json({ error: 'YouTube URL and format is required' });
    }

    if (format != 'mp3' && format != 'mp4') {
      return res.status(400).json({ error: 'Format should be mp3 or mp4' });
    }

    // Get video info
    const info = await ytdl.getInfo(url);

    let filePath;
    let stream;
    if (format == 'mp3') {
      // Set up file path for MP3
      filePath = path.join(__dirname, 'Downloads', `${info.videoDetails.videoId}.mp3`);

      // Download audio in MP3 format
      stream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
    } else if (format == 'mp4') {
      // Set up file path for MP4
      filePath = path.join(__dirname, 'Downloads', `${info.videoDetails.videoId}.mp4`);

      // Download video in MP4 format
      stream = ytdl(url, { quality: 'highestvideo', filter: 'videoandaudio' });
    }

    // Ensure the directory exists
    ensureDirectoryExists(filePath);

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('finish', () => {
      res.status(200).json({ message: 'Download successful' });
    });
  } catch (error) {
    console.error('Error downloading:', error);
    res.status(500).json({ error: 'Error downloading' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
