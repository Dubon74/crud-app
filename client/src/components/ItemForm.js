// src/components/ItemForm.js
import React, { useState, useEffect } from 'react';

function ItemForm({ itemId, onFormSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (itemId) {
            fetch(`http://localhost:3000/api/items/${itemId}`)
                .then(response => response.json())
                .then(data => {
                    setName(data.name);
                    setEmail(data.email);
                    setBirthdate(data.birthdate);
                    setPhone(data.phone);
                })
                .catch(error => console.error('Error:', error));
        }
    }, [itemId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, email, birthdate, phone };
        const method = itemId ? 'PUT' : 'POST';
        const url = itemId ? `http://localhost:3000/api/items/${itemId}` : 'http://localhost:3000/api/items';

        fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(() => onFormSubmit())
            .catch(error => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="Fecha de Nacimiento"
                required
            />
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefono"
                required
            />
            <button type="submit">Guardar</button>
        </form>
    );
}

export default ItemForm;
