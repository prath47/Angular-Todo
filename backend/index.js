const express = require("express");
const monoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoutes");
const todoRouter = require("./routes/todoRoutes");
const path = require("path");
const cookieParser = require("cookie-parser");

monoose
  .connect("mongodb://localhost:27017/todo-app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

  app.use(express.static(path.resolve("./dist/frontend/browser")));
// app.set("view engine", "ejs");
// app.set("views", path.resolve("./dist/frontend/browser"));

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/todos", todoRouter);


app.get('/', function(req, res){ 
  res.sendFile('index.html', { 
      title: 'View Engine Demo'
  }) 
}) 

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the Todo App",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
