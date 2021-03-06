var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/students', db.getAllStudents);
router.get('/all_tasks', db.getAllTasks);
router.get('/completed_tasks', db.getAllCompletedTasks);
// router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/completed_tasks', db.createCompletedTask);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);

module.exports = router;
