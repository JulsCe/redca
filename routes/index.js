var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REDCA - ' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'REDCA - Sobre nosotros' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'REDCA - Contáctanos' });
});

router.get('/verificar_usuario', function(req, res, next) {
  res.render('verificar_usuario', { title: 'REDCA - Gestion de usuario' });
});

router.get('/usuario_no_encontrado', function(req, res, next) {
  res.render('usuario_no_encontrado', { title: 'REDCA - Gestion de usuario' });
});

router.get('/usuario_encontrado', function(req, res, next) {
  res.render('usuario_encontrado', { title: 'REDCA - Gestion de usuario' });
});

router.get('/buscar_usuario', function(req, res, next) {
  res.render('buscar_usuario', { title: 'REDCA - Gestion de usuario' });
});

router.get('/cambio_clave', function(req, res, next) {
  res.render('cambio_clave', { title: 'REDCA - Gestion de usuario' });
});

router.get('/sesion_iniciada', function(req, res, next) {
  res.render('sesion_iniciada', { title: 'REDCA - Administrador' });
});

router.get('/clave_incorrecta', function(req, res, next) {
  res.render('clave_incorrecta', { title: 'REDCA - Validación' });
});

router.get('/registro_exitoso', function(req, res, next) {
  res.render('registro_exitoso', { title: 'REDCA - Registro' });
});

router.get('/usuclave_incorrecta', function(req, res, next) {
  res.render('usuclave_incorrecta', { title: 'REDCA - Validación' });
});

router.get('/te_jodiste', function(req, res, next) {
  res.render('te_jodiste', { title: 'REDCA - Te jodiste' });
});

router.get('/julio', function(req, res, next) {
  res.render('julio', { title: 'REDCA - Saludo' });
});

module.exports = router;
