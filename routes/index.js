var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mapas Moreno - Hoteles Málaga' });
});

//ruta de testboostrap, solo test instalación
router.get('/testbootstrap', function(req, res, next) {
  res.render('testbootstrap', { title: 'Prueba de Bootstrap' });
});

//ruta de testbootstrapsweetalert2, solo test instalación
router.get('/testbootstrapsweetalert2', function(req, res, next) {
  res.render('testbootstrapsweetalert2', { title: 'Prueba de Bootstrap con Sweetalert2' });
});

//ruta de testleaflet, solo test instalación
router.get('/testleaflet', function(req, res, next) {
  res.render('testleaflet', { title: 'Prueba de Leaflet' });
});



module.exports = router;
