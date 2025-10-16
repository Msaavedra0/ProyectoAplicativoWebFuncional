const mongoose = require('mongoose');
const Empleado = require('./models/empleado'); 


const URI = 'mongodb://localhost/empleados';

async function mostrarTabla() {
  try {
   
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Conectado a MongoDB");

  
    const empleados = await Empleado.find();

    console.log("📋 Tabla de empleados:\n");
    console.table(
      empleados.map(emp => ({
        ID: emp._id.toString(),
        Nombre: emp.name,
        Cargo: emp.position,
        Oficina: emp.office,
        Salario: emp.salary
      }))
    );

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

mostrarTabla();
