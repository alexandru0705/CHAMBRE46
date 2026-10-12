const Track = require('../models/Track');

exports.getAllTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    next(error);
  }
};

exports.createTrack = async (req, res, next) => {
  try {
    const track = new Track(req.body);
    await track.save();
    res.status(201).json({ message: 'Track added successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.deleteTrack = async (req, res, next) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ error: 'Track not found!' });

    await Track.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Track deleted!' });
  } catch (error) {
    next(error);
  }
};
/*...
exports.addComment = async (req, res, next) => {
  try {
    const { text, rating } = req.body;
    const userId = req.auth.userId;

    const track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ error: 'Track not found' });

    // Optional: Check if user already commented
    const existingComment = track.comments.find(c => c.userId.toString() === userId);
    if (existingComment) {
      return res.status(400).json({ error: 'You have already commented on this track.' });
    }

    track.comments.push({ userId, text, rating });

    // If ratings are included, recalculate average
    if (rating) {
      const ratedComments = track.comments.filter(c => c.rating);
      const sum = ratedComments.reduce((acc, curr) => acc + curr.rating, 0);
      track.averageRating = sum / ratedComments.length;
    }

    await track.save();
    res.status(201).json({ message: 'Comment added successfully!', comments: track.comments });
  } catch (error) {
    next(error);
  }
};/*...*/