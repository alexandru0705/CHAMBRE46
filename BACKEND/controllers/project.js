const Project = require('../models/Project');
const fs = require('fs');
const path = require('path');

exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

exports.getOneProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found!' });
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const projectData = JSON.parse(req.body.project);
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/Images/${req.file.filename}` : null;

    const project = new Project({
      ...projectData,
      imageUrl
    });

    await project.save();
    res.status(201).json({ message: 'Project created successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found!' });

    if (project.imageUrl) {
      const filename = project.imageUrl.split('/Images/')[1];
      const filePath = path.join(__dirname, '..', 'Images', filename);
      fs.unlink(filePath, () => {});
    }

    await Project.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Project deleted!' });
  } catch (error) {
    next(error);
  }
};