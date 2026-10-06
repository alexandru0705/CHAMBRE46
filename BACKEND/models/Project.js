const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  context: { type: String, required: true },
  objectives: [{ type: String }],
  stack: [{ type: String, required: true }],
  challenges: { type: String },
  githubUrl: { type: String },
  liveUrl: { type: String },
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);