const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

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

app.post('/api/books', (req, res) => {

  const bookSchema = {
    name: Joi.string().required().min(3)
  };
  const result = Joi.validate(req.body, bookSchema);
  if (result.error) {
    res.status(400).send(result.error);
  }

  // if (!req.body.name) {
  //   res.status(400).send('Name is required');
  //   return;
  // }
  // if (req.body.name.length < 3) {
  //   res.status(400).send('Name should be at least 3 characters');
  //   return;
  // }
  const book = {
    id: books.length + 1,
    name: req.body.name
  };
  books.push(book);
  res.status(201).send(book);
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