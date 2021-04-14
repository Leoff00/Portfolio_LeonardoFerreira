const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.static("public"));
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
