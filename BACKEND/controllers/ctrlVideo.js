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