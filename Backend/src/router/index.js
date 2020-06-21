const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Servidor arriba",
  });
});

module.exports = router;
