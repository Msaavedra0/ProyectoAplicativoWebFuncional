const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

console.log("✅ Archivo empleados.routes.js CARGADO");


router.get('/test', (req, res) => {
  res.send('Ruta TEST OK');
});


router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.get('/:id', empleadoCtrl.getUnicoEmpleado);
router.put('/:id', empleadoCtrl.editarEmpleado);
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;
