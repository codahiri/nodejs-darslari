const express = require('express');
const app = express();

const books = [{
    id: 1,
    name: 'Usta va Margarita'
  },
  {
    id: 2,
    name: 'Urush va Tinchlik'
  },
  {
    id: 3,
    name: 'Zardusht tavallosi'
  }
];

app.get('/', (req, res) => {
  res.send('Salom Dunyo!');
  res.end();
});

app.get('/api/books', (req, res) => {
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send(`Berilgan id dagi kitob topilmadi!`)
  }
  res.send(book);
});

app.get('/api/articles/:year/:month', (req, res) => {
  res.send(req.query);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}-port ishladi`);
});