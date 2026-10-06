const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  hardwareUsed: [{ type: String }], // e.g., ["Octatrack MKII", "Digitakt II", "Prophet Rev2"]
  audioUrl: { type: String, required: true },
  durationInSeconds: { type: Number },
  releaseYear: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Track', trackSchema);