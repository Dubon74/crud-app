// JavaScript source code
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Ruta para obtener todos los elementos
router.get('/', itemsController.getAllItems);

// Ruta para obtener un elemento por ID
router.get('/:id', itemsController.getItemById);

// Ruta para crear un nuevo elemento
router.post('/', itemsController.createItem);

// Ruta para actualizar un elemento por ID
router.put('/:id', itemsController.updateItem);

// Ruta para eliminar un elemento por ID
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
