let express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("listening on PORT !" + PORT);
});

let fruits = ["banana", "apple"];

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.get("/addFruit", (req, res) => {
  let fruitName = req.query.name;
  fruits.push(fruitName);

  console.log(fruits);
  res.send(fruits);
});


app.use(express.static("public"));