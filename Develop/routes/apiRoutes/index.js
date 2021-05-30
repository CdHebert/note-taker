const router = require('express').Router();
const noteRoutes = require('./notes');


router.use(noteRoutes);

module.exports = router;
