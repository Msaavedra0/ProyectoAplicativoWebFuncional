  const Empleado = require('../models/empleado');
  const empleadoCtrl = {};

  
empleadoCtrl.getEmpleados = async (req, res) => {
  console.log("📥 Entró a GET /api/empleados"); 
  try {
    const empleados = await Empleado.find();   
    console.log("✅ Resultado de Empleado.find():", empleados);
    res.json(empleados);
  } catch (error) {
    console.error("❌ Error en getEmpleados:", error);
    res.status(500).json({ error: "Error al obtener empleados" });
  }
};



  empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({ status: 'Empleado guardado' });
  };

 
  empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
  };


  empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleadoEdit = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
    res.json({ status: 'Empleado actualizado' });
  };

  
  empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado eliminado' });
  };

  module.exports = empleadoCtrl;
