const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const { findAverage } = require("../utilities/utilities");

const router = Router();

router.get("/", async (req, res) => {
  const users = fs.readFileSync(path.resolve(__dirname, "users.json"), {
    encoding: "UTF-8",
  });
  const usersWithStatistics = findAverage(JSON.parse(users));
  res.json(usersWithStatistics);
});

module.exports = router;
