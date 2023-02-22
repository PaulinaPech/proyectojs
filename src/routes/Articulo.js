const express = require('express');
const router = require('express').Router();

const ArticuloController = require('../controllers/ArticuloController');
router.get('/', ArticuloController.get);
router.post('/add', ArticuloController.post);
router.get('/delete/:idArticulo', ArticuloController.delete);

router.get('/update/:idArticulo', ArticuloController.edit);
router.post('/update/:idArticulo', ArticuloController.update);



module.exports = router;