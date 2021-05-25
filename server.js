let express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("listening on PORT !" + PORT);
});

app.use(express.static("public"));

let Data = [];


app.post("/fruits",(request, response) => {
  let fruitName = request.body;
  Data.push(fruitName);
  console.log(Data);

  response.send(Data);
});

app.get("/fruits", (request,response) => {
  response.send(Data);
});

