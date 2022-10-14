const express = require("express");
const router = express.Router();

const { verifyToken } = require("./middlewares");

router.get("/sendjson", verifyToken, (req, res) => {
  const users = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "npm" },
    { id: 3, name: "Pengsu" },
  ];
  // 모든 정보 제공
  res.json(users);
});

router.get("/:id", verifyToken, async (req, res) => {
  const users = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "npm" },
    { id: 3, name: "Pengsu" },
  ];
  // 특정 정보를 찾아 제공
  user = users.find((u) => u.id === parseInt(req.params.id));
  res.send(user);
});
