// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const { default: mongoose } = require("mongoose");

// CONFIGURATION
const app = express();
const PORT = process.env.PORT || 8020;

// VIEW ENGINE

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES
app.use("/books", require("./routes/bookRoutes"));

// app.get("/", (req, res) => {
//   console.log(`Server Awake on port ${PORT}`);
//   res.send("Home Page");
// });

// WILDCARD ROUTE
app.get("*", (req, res) => {
  res.send("Page not found");
});

// DATABASE CONNECTIONS
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

// LISTEN
app.listen(PORT);