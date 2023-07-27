const Skill = require("../models/skill");
const { validationResult } = require("express-validator");

const createSkill = async(req, res) => {
  try {
    const result = validationResult(req.body);
    if (!result.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Encountered problems with validating your request",
        errors: result.array()
      })
    }

    const skill = await Skill.create(req.body);
    if (!skill || skill instanceof Error) {
      return res.status(400).json({
        success: false,
        message: "Failed to create skill"
      })
    }

    return res.status(201).json({
      success: true,
      message: "Skill created successfully",
      data: skill
    })
  } catch(error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })
  }
}

const getSkills = async(req, res) => {
  try{
    const skills = await Skill.find({}).sort({$natural: -1}).lean();

    if (!skills.length) {
      return res.status(404).json({
        success: true,
        message: "No skills found",
        data: skills
      })
    }

    return res.status(200).json({
      success: true,
      data: skills
    })
  }catch(error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })
  }
}

const deleteSkill = async(req, res) => {
  try{
    const {skillId} = req.params;
    const deleteSkill = await Skill.findByIdAndDelete(skillId);

    if (deleteSkill instanceof Error) {
      return res.status(400).json({
        success: false,
        message: "Failed to delete skill",
        deleteSkill
      })
    }

    return res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    })
  }catch(error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })
  }
}

module.exports = {
  createSkill,
  getSkills,
  deleteSkill,
}