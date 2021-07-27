const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
const todoRoute = require("./routes/todos");

app.use(cors());
app.use(express.json())
app.use("/todo", todoRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})