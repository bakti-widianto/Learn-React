var express = require('express');
var router = express.Router();
var todos = [];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(todos)
});

router.post('/', function (req, res, next) {
  todos.push(req.body.task)
  res.json(todos)
});

router.delete('/:id', function (req, res, next) {
  todos.splice(req.params.id, 1)
  res.json(todos)
});

module.exports = router;
