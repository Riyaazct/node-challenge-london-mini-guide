const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

// Level 100 (done by Denver)

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

// level 200

app.get("/pharmacies", (req, res) => res.json(Harrow.pharmacies));

app.get("/colleges", (req, res) => res.json(Harrow.colleges));

app.get("/doctors", (req, res) => res.json(Harrow.doctors));

app.get("/hospitals", (req, res) => res.json(Harrow.hospitals));

// Level 300

// app.get("/:city/pharmacies", (req, res) => {
//   const clientSelection = req.params.city;

//   if (clientSelection === "heathrow") {
//     res.json(Heathrow.pharmacies);
//   } else if (clientSelection === "harrow") {
//     res.json(Harrow.pharmacies);
//   } else if (clientSelection === "stratford") {
//     res.json(Stratford.pharmacies);
//   } else {
//     res.status(400).json({ msg: "Not a valid country" });
//   }
// });

app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category;
  city.includes("harrow") && category.includes("pharmacies")
    ? res.json(Harrow.pharmacies)
    : city.includes("harrow") && category.includes("colleges")
    ? res.json(Harrow.colleges)
    : city.includes("harrow") && category.includes("doctors")
    ? res.json(Harrow.doctors)
    : city.includes("harrow") && category.includes("hospitals")
    ? res.json(Harrow.hospitals)
    : city.includes("heathrow") && category.includes("pharmacies")
    ? res.json(Heathrow.pharmacies)
    : city.includes("heathrow") && category.includes("colleges")
    ? res.json(Heathrow.colleges)
    : city.includes("heathrow") && category.includes("doctors")
    ? res.json(Heathrow.doctors)
    : city.includes("heathrow") && category.includes("hospitals")
    ? res.json(Heathrow.hospitals)
    : city.includes("stratford") && category.includes("pharmacies")
    ? res.json(Stratford.pharmacies)
    : city.includes("stratford") && category.includes("colleges")
    ? res.json(Stratford.colleges)
    : city.includes("stratford") && category.includes("doctors")
    ? res.json(Stratford.doctors)
    : city.includes("stratford") && category.includes("hospitals")
    ? res.json(Stratford.hospitals)
    : res.status(400).json({ msg: "City or Category not found" });
});

// Run Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
