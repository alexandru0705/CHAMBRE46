const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  hardwareUsed: [{ type: String }], // e.g., ["Octatrack MKII", "Digitakt II", "Prophet Rev2"]
  audioUrl: { type: String, required: true },
  durationInSeconds: { type: Number },
  releaseYear: { type: Number },
  //comments: [{
  //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //text: { type: String, required: true, trim: true },
  //rating: { type: Number, min: 1, max: 5 }, // Optional: star rating attached to the comment
  //createdAt: { type: Date, default: Date.now }
  //}],
  //averageRating: { type: Number, default: 0 }
}, { timestamps: true });


module.exports = mongoose.model('Track', trackSchema);