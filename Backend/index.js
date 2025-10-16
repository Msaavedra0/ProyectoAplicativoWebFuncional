const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const empleadosRoutes = require('./routes/empleados.routes.js');


const app = express();
app.use(cors());
app.use(express.json());

  
app.use('/api/empleados', empleadosRoutes);


app.get('/', (req, res) => {
  res.send('Servidor Express OK!');
});


app.get('/api/empleados/test', (req, res) => {
  res.send('Ruta funcionando 👍');
});


mongoose.connect('mongodb://localhost/gestion-empleados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ DB is connected'))
.catch(err => console.error(err));


app.listen(3000, () => {
  console.log('🚀 Express escuchando en http://localhost:3000');
});
