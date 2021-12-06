const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Salom Dunyo!');
  res.end();
});

app.get('/api/books', (req, res) => {
  res.send(['Usta va Margarita', 'Urush va Tinchlik', 'Zardusht tavallosi'])
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}-port ishladi`);
});