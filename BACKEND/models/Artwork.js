const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  medium: { type: String, required: true }, // e.g., "Oil on canvas", "Mixed media"
  dimensions: { type: String },
  imageUrl: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Artwork', artworkSchema);