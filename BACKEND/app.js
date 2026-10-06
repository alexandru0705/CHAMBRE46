const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/mongoDB');

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded files from the Images directory
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// Routes
const userRoutes = require('./routes/user');
const artworkRoutes = require('./routes/artwork');
const projectRoutes = require('./routes/project');
const trackRoutes = require('./routes/track');
const videoRoutes = require('./routes/video');

app.use('/api/auth', userRoutes);
app.use('/api/artworks', artworkRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tracks', trackRoutes);
app.use('/api/videos', videoRoutes);

// Health-check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'CHAMBRE46 API is running ⚡' });
});

// 404 catch-all
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Centralized error handler
app.use((err, req, res, next) => {
    if (err.name === 'MulterError') {
        return res.status(400).json({ error: err.message });
    }
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

module.exports = { app, connectDB };