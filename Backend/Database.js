const mongoose = require('mongoose');

const URI = 'mongodb://localhost/empleados';

mongoose.connect(URI)
  .then(db => console.log('✅ DB is connected'))
  .catch(err => console.error('❌ Error en conexión:', err));

module.exports = mongoose;
