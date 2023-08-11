const express = require("express")
const cookieParser = require("cookie-parser")
const app = express();
const blog = require("./routes/blogRoute.js")
const property = require("./routes/propertyRoute.js")
const admin = require("./routes/adminRoute.js")
const errorMiddleware = require("./middlewares/error.js") 
const path = require("path");

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

  
  
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1",blog)
app.use("/api/v1",property)
app.use("/api/v1",admin)
console.log("aa")
app.use(express.static(path.join(__dirname, "../../frontend/build")));
console.log("ab")
  
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});
console.log("ac")

app.use(errorMiddleware)
module.exports = app




