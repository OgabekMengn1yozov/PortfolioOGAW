const Express = require("express");
const Path = require("path");

const app = Express();

app.use("/", Express.static(Path.join(__dirname, "/src/public")));
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "src", "views"));

app.use("/", (req, res) => {
    res.render("index")
})

app.listen(3000, () => console.log("server run"));
