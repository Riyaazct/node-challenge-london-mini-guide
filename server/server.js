const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

app.get("/", (req, res) => {
  res.send({
    SupportedRoutes: [
      "/Pharmacies",
      "/Doctors",
      "/Colleges",
      "/Hospitals",
    ],
    Version: "0.0.0.1",
    Authors: "Tresor Bipa & Riyaaz Singh",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
