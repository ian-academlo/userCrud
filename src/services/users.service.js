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
}

module.exports = UserServices;
