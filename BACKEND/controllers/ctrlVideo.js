const Video = require('../models/Video');

exports.getAllVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

exports.createVideo = async (req, res, next) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json({ message: 'Video added successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found!' });

    await Video.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Video deleted!' });
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