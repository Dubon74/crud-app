const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const itemsRoutes = require('./routes/itemsRoutes');

app.use(express.json());


app.use('/api/items', itemsRoutes); // Usa las rutas definidas

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

