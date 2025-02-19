var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//ruta de testboostrap, BORRAR LUEGO
router.get('/testbootstrap', function(req, res, next) {
  res.render('testbootstrap', { title: 'Prueba de Bootstrap' });
});


module.exports = router;
