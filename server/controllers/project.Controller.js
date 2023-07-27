const Project = require('../models/project');
const { validationResult } = require('express-validator');
const { cloudinaryDelete } = require("../config/cloudinary");

const createProject = async (req, res) => {
  try {
    const result = validationResult(req.body);
    if (!result.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Encountered problems with validating your request",
        errors: result.array()
      })
    }

    const newProject = new Project(req.body);
    newProject.screenshotURL = req.file.path;
    await newProject.save()

    if (!newProject || newProject instanceof Error) {
      return res.status(400).json({
        success: false,
        message: "Failed to create project",
        newProject,
      })
    }

    return res.status(201).json({
      success: true,
      message: "successful",
      data: newProject,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    })
  }
}

const getProjects = async(req, res) => {
  try {
    const projects = await Project.find({}).sort({$natural: -1}).lean();

    if (!projects.length) {
      return res.status(404).json({
        success: true,
        message: "No projects found",
        data: projects
      })
    }

    return res.status(200).json({
      success: true,
      data: projects
    })
  } catch(error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    })
  }
}

const updateProject = async(req, res) => {
  try {
    const {projectId} = req.params;
    const oldProject = await Project.findById(projectId);

    if (!oldProject) {
      return res.status(404).json({
        success: true,
        message: "No project found",
        oldProject
      })
    }

    const newProject = req.body;

    if (req.file) {
      await cloudinaryDelete(oldProject.screenshotURL);
      newProject.screenshotURL = req.file.path;
    }

    const updateProject = await Project.findOneAndUpdate(oldProject, newProject,
      { new: true },
      { runValidators: true },
    )

    if (updateProject instanceof Error) {
      return res.status(400).json({
        success: false,
        message: "Failed to update project",
        updateProject
      })
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updateProject
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    })
  }
}

const deleteProject = async(req, res) => {
  try {
    const {projectId} = req.params
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "No project found",
      })
    }

    await cloudinaryDelete(project.screenshotURL);
    await Project.findByIdAndDelete(projectId);

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully"
    })

  } catch (error) {
     return res.status(500).json({
      message: "Internal server error",
      error: error.message
    })
  }
}

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
}