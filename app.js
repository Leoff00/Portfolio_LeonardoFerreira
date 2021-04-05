const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 3000;
const router = require("./routes/router");

app.use("/", router);
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname + "public")));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:3000`);
});
