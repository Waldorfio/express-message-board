const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'title-test',
    messages: messages,
  });
});

/* GET new form page */
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  // Grab submit button contents, and push to array
  messages.push({text: req.body.inputMsg, user: req.body.inputUsr, added: new Date()});
  // Re-render homepage
  res.redirect('/')
})

module.exports = router;
