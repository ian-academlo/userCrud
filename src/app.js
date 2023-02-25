const express = require("express");
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

app.use(express.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
