// src/App.js
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
    const [editingItemId, setEditingItemId] = useState(null);

    const handleFormSubmit = () => {
        setEditingItemId(null);
        // Actualiza la lista de elementos si es necesario
    };

    return (
        <div className="App">
            <h1>Aplicacion CRUD</h1>
            <ItemForm itemId={editingItemId} onFormSubmit={handleFormSubmit} />
            <ItemList onEdit={setEditingItemId} />
        </div>
    );
}

export default App;
