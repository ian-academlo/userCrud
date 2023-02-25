const { Router } = require("express");
const User = require("../models/users.model");

const router = Router();

router.get("/api/v1/users", async (req, res) => {
  try {
    const users = await User.findAll(); // SELECT * FROM users;
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

// router.put();

// router.delete();

module.exports = router;
