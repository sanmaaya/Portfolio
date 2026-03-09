const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: String, required: true },
    github: String,
    live: String,
    image: String // Added image field for better visuals later
});

module.exports = mongoose.model("Project", projectSchema);
