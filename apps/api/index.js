
const mongoose = require('mongoose');
require('dotenv').config(); 

// Conectar a MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1); // Salir si no se puede conectar
  }
};

// Llamar a la función de conexión
connectToDatabase();

// Configuración básica del servidor Express
const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear JSON

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Escuchar en el puerto 3000 o el puerto definido en el entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
