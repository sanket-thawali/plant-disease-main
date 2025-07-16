import React from "react";
import plantData from "../data/plants.json";

const PlantDiseases = () => {
  return (
    <div className="plant-disease-page">
      <h2>Plant Diseases Information</h2>
      <ul className="plant-list">
        {plantData.plants.map((plant) => (
          <li key={plant.name} className="plant-item">
            <img src={plant.image_url} alt={plant.name} className="plant-image" />
            <div className="plant-details">
              <h3>{plant.name}</h3>
              {plant.diseases.map((disease, index) => (
                <p key={index}>
                  <strong>{disease.name}:</strong> {disease.description}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantDiseases;
