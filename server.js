const Express = require("express");
const Path = require("path");
const compression = require("compression");

const app = Express();


app.use("/", Express.static(Path.join(__dirname, "/src/public")));
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "src", "views"));

app.use(
  compression({  
    level: 6,        
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false; 
      }
      return compression.filter(req, res);
    },
  })
);
app.use("/", (req, res) => {
    res.render("index")
})

app.listen(8000, () => console.log("server run 8000"));
