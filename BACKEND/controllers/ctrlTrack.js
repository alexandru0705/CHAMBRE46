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