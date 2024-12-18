const express = require("express");
const monoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoutes");
const todoRouter = require("./routes/todoRoutes");

monoose
  .connect("mongodb://host.docker.internal:27017/todo-app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/todos', todoRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Todo App",
  });
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
