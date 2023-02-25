const { Router } = require("express");
const User = require("../models/users.model");

const router = Router();

router.get("/api/v1/users", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email"],
    }); // SELECT id, name, email FROM users;
    res.json(users); // JSON.stringify(users)
  } catch (error) {
    res.status(400).json(error);
  }
});

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
