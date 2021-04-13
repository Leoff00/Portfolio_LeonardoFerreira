const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 8081;


app.use(express.static("public"));
// app.use(express.static(path.join(__dirname + "public")));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on http://localhost:8081`);
});
