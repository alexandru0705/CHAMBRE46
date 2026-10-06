const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true }, // URL or embedded source (e.g., YouTube, Vimeo, or hosted file)
  durationInSeconds: { type: Number },
  year: { type: Number },
  tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);