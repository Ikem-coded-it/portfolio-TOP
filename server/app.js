require('dotenv').config()
const express = require('express');
const connect = require('./config/db');
const projectRouter = require("./routes/project.Routes");
const skillRouter = require("./routes/skill.Routes");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// use routes
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/skills", skillRouter);
app.use("/api/v1/download-resume", (req, res) => {
  res.download("./public/resume/Ikemefuna-Onubogu-CV.pdf")
})
app.use("/api/v1/start", async(req, res) => {
  await res.sendStatus(200)
})

app.use("*", (req, res) => {
  res.status(404).send({
    success: false,
    message: "Bad Request or Unknown endpoint",
  });
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
});

const PORT = process.env.PORT

const start = async () => {
  await connect();
  app.listen(PORT, console.log(`Server running on ${PORT}`))
}

start();