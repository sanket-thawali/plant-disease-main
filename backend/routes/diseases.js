const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/details/', (req, res) => {
    console.log("🟡 /api/diseases/details route hit!");
    const idName = req.query.name;
    console.log("🔍 Looking for disease with name:", idName);

    const diseasesFilePath = path.join(__dirname, '../data/diseases.json');
    fs.readFile(diseasesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading diseases.json:', err);
            return res.status(500).json({ message: 'Server error' });
        }

        const diseasesData = JSON.parse(data);
        const disease = diseasesData.diseases.find(d =>
            d.class_name.toLowerCase() === idName.toLowerCase()
        );

        if (!disease) {
            console.log("❌ Disease not found for:", idName);
            return res.status(404).json({ message: 'Disease not found' });
        }

        res.status(200).json(disease);
    });
});

module.exports = router;
