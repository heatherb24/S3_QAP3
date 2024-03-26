const express = require("express");
const app = express();
const port = 3000;

const viewRoutes = require("./routes/viewRoutes");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const inventory = [
    { name: "Coffee", quantity: 50, price: 4.99 },
    { name: "Tea", quantity: 60, price: 3.99 },
    { name: "Donut", quantity: 35, price: 1.99 },
  ];

  res.render("index", { inventory: inventory });
});

app.get("/edit/:id", function (req, res) {
  const itemId = req.params.id;
  console.log("edit item with ID:", itemId);
});

app.get("/delete/:id", function (req, res) {
  const itemId = req.params.id;
  console.log("delete item with ID:", itemId);
});

app.post("/add", function (req, res) {
  console.log("add new item");
});

app.use(express.urlencoded({ extended: true }));

app.post("/edit/:id", function (req, res) {
  const itemId = req.params.id;
  console.log("edit item with ID:", itemId);
});

app.post("/delete/:id", function (req, res) {
  const itemId = req.params.id;
  console.log("delete item with ID:", itemId);
});

app.post("/add", function (req, res) {
  console.log("add new item");
});


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
