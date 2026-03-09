const router = require("express").Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a project
router.post("/", async (req, res) => {
    const newProject = new Project(req.body);
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
