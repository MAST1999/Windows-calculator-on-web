const express = require("express");

const app = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4001;

app.use(express.static("../"));
app.get("/", (req, res) => {
  res.send("../index.html");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
