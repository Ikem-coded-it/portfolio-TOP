const express = require('express');
const { checkSchema } = require('express-validator');
const {
  createSkill,
  getSkills,
  deleteSkill
} = require("../controllers/skill.Controller")
const router = express.Router();

router.route("/create").post(checkSchema({
  name: {
    notEmpty: true,
    errorMessage: "Skill name is required",
  }
}), createSkill);

router.route("/").get(getSkills);
router.route("/delete/:skillId").delete(deleteSkill);

module.exports = router;