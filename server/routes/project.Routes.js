const express = require('express');
const { checkSchema } = require('express-validator');
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject
} = require("../controllers/project.Controller");
const { upload } = require("../config/cloudinary");
const router = express.Router();

router.route("/create").post(checkSchema({
  title: {
    notEmpty: true,
    errorMessage: "Title is required",
  },
  description: {
    notEmpty: true,
    errorMessage: "Description is required",
  },
  liveURL: {
    notEmpty: true,
    errorMessage: "Live URL is required",
  },
  codeURL: {
    notEmpty: true,
    errorMessage: "Code URL is required",
  },
}),
upload.single("screenshot"),
createProject);

router.route("/").get(getProjects);
router.route("/update/:projectId").patch(upload.single("picture"), updateProject);
router.route("/delete/:projectId").delete(deleteProject);

module.exports = router;