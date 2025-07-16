require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS
const diseasesRoutes = require('./routes/diseases');
const userRoutes = require('./routes/user');
const predictRoutes = require('./routes/predict');
const mongoose = require('mongoose');

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/diseases', diseasesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/predict', predictRoutes);
const translationRoutes = require('./routes/translation');
app.use('/api/translation', translationRoutes);

// connect to db
mongoose.set("strictQuery", false);  // this is added to remove deprecation warning
// mongoose.connect("mongodb://127.0.0.1:27017/plantDisease")
mongoose.connect(process.env.MONGO_URL)
    .then((result) => {
        // Listen for requests:
        app.listen(process.env.PORT || 4000, () => {
            console.log('Connected to db and Listening on port', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
