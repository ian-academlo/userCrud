// * usar clases en el servicio

const User = require("../models/users.model");

class UserServices {
  static async getAll() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const user = await User.findByPk(id, {
        attributes: ["id", "name", "email"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
