const express = require("express");

const PORT = 7000;

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/users", require("./routes/users.routes"));

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
