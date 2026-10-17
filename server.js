const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Masr Labs System' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
