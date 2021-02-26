const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers/burger_controller.js");
const exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log(`listening to: http://localhost:${PORT}`);
});
