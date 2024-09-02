// src/components/ItemList.js
import React, { useEffect, useState } from 'react';

function ItemList({ onEdit }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Lista de Elementos</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.email}
                        <button onClick={() => onEdit(item.id)}>Editar</button>
                        {}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
