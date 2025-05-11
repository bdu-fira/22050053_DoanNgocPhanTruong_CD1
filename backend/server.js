const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const db = require("./db");
const petsRouter = require("./routes/pets");

app.use(cors());
app.use(express.json());

app.use("/api/pets", petsRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});