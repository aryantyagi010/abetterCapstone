const mongoose = require('mongoose');

// Define the schema for coordinates and accelerometer data
const CoordinateSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  accelerationX: {
    type: Number,
    required: true
  },
  accelerationY: {
    type: Number,
    required: true
  },
  accelerationZ: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Coordinate = mongoose.model('Coordinate', CoordinateSchema);

module.exports = Coordinate;
