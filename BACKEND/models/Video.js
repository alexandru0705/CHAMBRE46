const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true }, // URL or embedded source (e.g., YouTube, Vimeo, or hosted file)
  durationInSeconds: { type: Number },
  year: { type: Number },
  tags: [{ type: String }],
  //comments: [{
  //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //text: { type: String, required: true, trim: true },
  //rating: { type: Number, min: 1, max: 5 }, // Optional: star rating attached to the comment
  //createdAt: { type: Date, default: Date.now }
  //}],
  //averageRating: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);