// importar el servicio
const UserServices = require("../services/users.service");

const getAllUsers = async (req, res) => {
  try {
    // mandar a pedir la info a la base de datos
    const data = await UserServices.getAll();
    res.json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getById(id);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
