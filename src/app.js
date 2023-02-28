const express = require("express");
const cors = require("cors");
const db = require("./utils/database");
const User = require("./models/users.model");
const userRoutes = require("./routes/user.routes");

User;

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Conexión a base de datos OK");
  })
  .catch((error) => {
    console.log(error);
  });

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(cors()); // aceptar peticiones de todo el mundo
app.use(express.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Crear un CRUD
// para TODOS
// Crear una tarea
// leer todas las tareas
// actualizar una tarea
// eliminar una tarea

// Tarea : title, description, status ( completada o no esta completada )
// vas a usar express, sequelize
// crear un archivo de rutas para manejar las rutas de los todos
// te recomiendo que tus endpoints sean '/api/v1/todo
