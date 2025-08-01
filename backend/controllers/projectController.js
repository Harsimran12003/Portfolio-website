const Project = require("../models/Project");

// GET all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve projects", error: err });
  }
};


