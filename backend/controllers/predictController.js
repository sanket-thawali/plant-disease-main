const axios = require('axios');
const FormData = require('form-data');
const { PassThrough } = require('stream');

const predictDisease = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Convert buffer to stream
    const bufferStream = new PassThrough();
    bufferStream.end(req.file.buffer);

    // Prepare form data to send to Python API
    const formData = new FormData();
    formData.append('image', bufferStream, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // Call the Python prediction API
    const response = await axios.post('http://localhost:10000/predict', formData, {
      headers: {
        ...formData.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const prediction = response.data;

    res.status(200).json(prediction);
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ message: 'Prediction failed' });
  }
};

module.exports = {
  predictDisease,
};
