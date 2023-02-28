const { Router } = require("express");
const User = require("../models/users.model");
const { getAllUsers, getUserById } = require("../controllers/users.controller");

const router = Router();

router.get("/api/v1/users", getAllUsers);

// SELECT * FROM users where id = 3;

router.get("/api/v1/users/:id", getUserById);

// * SELECT id, email, name FROM users WHERE email=email;
router.get("/api/v1/users/email/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({
      where: { email }, // ! { email: email }
      attributes: ["id", "email", "name"],
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// ! cómo harían un endpoint para que busque por id o por email

router.post("/api/v1/users", async (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const result = await User.create(newUser);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).json(error);
  }
}); // INSERT INTO users (name, email,  password) VALUES ()

router.put("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await User.update(data, {
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});

// * path params
router.delete("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // objeto
    await User.destroy({
      where: { id }, // id: id
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

// * MVC
// * Vista --> desacoplada en un proyecto de react
