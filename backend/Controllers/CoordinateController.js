const Coordinate = require('../Models/Coordinate');

// Function to save coordinates
exports.saveCoordinates = async (req, res) => {
  const { latitude, longitude, accelerationX, accelerationY, accelerationZ } = req.body;

  // Check if required fields are provided
  if (!latitude || !longitude || !accelerationX || !accelerationY || !accelerationZ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new coordinate document
  const newCoordinate = new Coordinate({
    latitude,
    longitude,
    accelerationX,
    accelerationY,
    accelerationZ,
  });

  try {
    // Save to MongoDB
    const savedCoordinate = await newCoordinate.save();
    return res.status(201).json({ message: 'Coordinates saved successfully', data: savedCoordinate });
  } catch (error) {
    return res.status(500).json({ message: 'Error saving coordinates', error });
  }
};
