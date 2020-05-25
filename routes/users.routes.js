const { Router } = require("express");
const fs = require("fs");
const path = require("path");

const router = Router();

router.get("/", async (req, res) => {
  let data = fs.readFileSync(path.resolve(__dirname, "users.json"), {
    encoding: "UTF-8",
  });
  let newData = appendCalculations(data);
  res.json(JSON.parse(newData));
});

function appendCalculations(data) {
  data = JSON.parse(data);
  let sumTickets = 0;
  let sumBackups = 0;

  for (let i = 0; i < data.length; i++) {
    sumTickets = sumTickets + data[i].ticketsCreated.length;
    sumBackups = sumBackups + data[i].backups.length;
  }

  let avBackups = sumBackups / data.length;
  let avTickets = sumTickets / data.length;

  let newData = {
    users: data,
    calculations: {
      averageTicketCreated: avBackups.toFixed(2),
      averageBackupsCreated: avTickets.toFixed(2),
    },
  };

  return JSON.stringify(newData);
}

module.exports = router;
