const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json')

router.get('/notes', (req, res) => {
  res.json(notes)
  fs.readFile.json(notes);
  });
  
  router.post('/notes', (req, res) => {
    const newNotes = req.body;
  
    
    notes.push(newNotes);
    
    fs.writeFile.json(newNotes);
    res.json(newNotes);
  })
  

module.exports = router;