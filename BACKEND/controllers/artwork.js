const Artwork = require('../models/Artwork');
const fs = require('fs');
const path = require('path');

exports.getAllArtworks = async (req, res, next) => {
  try {
    const artworks = await Artwork.find();
    res.status(200).json(artworks);
  } catch (error) {
    next(error);
  }
};

exports.getOneArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) return res.status(404).json({ error: 'Artwork not found!' });
    res.status(200).json(artwork);
  } catch (error) {
    next(error);
  }
};

exports.createArtwork = async (req, res, next) => {
  try {
    const artworkData = JSON.parse(req.body.artwork);
    const imageUrl = `${req.protocol}://${req.get('host')}/Images/${req.file.filename}`;
    
    const artwork = new Artwork({
      ...artworkData,
      imageUrl
    });

    await artwork.save();
    res.status(201).json({ message: 'Artwork created successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.deleteArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) return res.status(404).json({ error: 'Artwork not found!' });

    const filename = artwork.imageUrl.split('/Images/')[1];
    const filePath = path.join(__dirname, '..', 'Images', filename);

    fs.unlink(filePath, async (err) => {
      if (err) console.error('Failed to delete image file:', err);
      await Artwork.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Artwork deleted!' });
    });
  } catch (error) {
    next(error);
  }
};