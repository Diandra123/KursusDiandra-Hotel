var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = {
    layout: 'frontend',
    title: 'HOTEL'
  };
  res.render('index', data);
});

router.get('/login', function (req, res, next) {
  let login = {}
  res.render('login');
});

router.get('/admin', function (req, res, next) {
  let login = {}
  res.render('admin');
});

router.get('/tambah', function (req, res, next) {
  let login = {}
  res.render('tambah');
});

router.get('/simpan', function (req, res, next) {
  let login = {}
  res.render('simpan');
});

router.get('/ubah', function (req, res, next) {
  let login = {}
  res.render('ubah');
});

module.exports = router;