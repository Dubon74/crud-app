// JavaScript source code
const db = require('../db');

// Obtener todos los elementos
exports.getAllItems = (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener un elemento por ID
exports.getItemById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM items WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json(results[0]);
    });
};

// Crear un nuevo elemento
exports.createItem = (req, res) => {
    const { name, email, birthdate, phone } = req.body;
    const age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    const query = 'INSERT INTO items (name, email, birthdate, age, phone) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, birthdate, age, phone], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

// Actualizar un elemento por ID
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, email, birthdate, phone } = req.body;
    const age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    const query = 'UPDATE items SET name = ?, email = ?, birthdate = ?, age = ?, phone = ? WHERE id = ?';
    db.query(query, [name, email, birthdate, age, phone, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json({ message: 'Item actualizado' });
    });
};

// Eliminar un elemento por ID
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM items WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json({ message: 'Item eliminado' });
    });
};
