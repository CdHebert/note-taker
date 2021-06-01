const router = require('express').Router();
const fs = require('fs');
let notes = require('../../db/db.json')
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
notes = require('../../db/db.json');
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const pushNote = req.body;
  pushNote.id = uuidv4();
  notes.push(pushNote);
  fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
    if (err) throw err

  });

  res.json(notes);

});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  const keptNotes = notes.filter((note) => {
    return note.id !== id;
  })
  fs.writeFile('./db/db.json', JSON.stringify(keptNotes), (err, data) => {
    if (err) throw err
   
  });
  res.json(keptNotes);

});
// router.delete('/notes/:id', (req, res) => {
//   const id = req.params.id;
//   const keptNotes = notes.filter((note) => {
//     return note.id !== id;
//   });
//   const keptJson = JSON.stringify(keptNotes);
//   fs.writeFileSync('./db/db.json', keptJson, (err))
// });



module.exports = router;