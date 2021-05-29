const express = require('express');
const path = require('path');
const notes = require('./db/db.json')


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
});

app.post('/api/notes', (req, res) => {
  const newNotes = req.body;

  console.log(newNotes);

  notes.push(newNotes);

  res.json(newNotes);
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
