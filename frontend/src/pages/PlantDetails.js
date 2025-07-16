import React from "react";
import { useParams } from "react-router-dom";
import plantData from "../data/plants.json"; // Importing the plant data
import "./PlantDetails.css";

const PlantDetails = () => {
  const { plantId } = useParams();

  // Find the plant data based on the plantId
  const plant = plantData.plants.find(
    (plant) => plant.id === parseInt(plantId)
  );

  if (!plant) {
    return <div>Plant not found.</div>; // Handle undefined plantId
  }

  return (
    <div className="plant-detail-card">
      <h1>{plant.name}</h1>
      <img
        src={plant.image_url}
        alt={plant.name}
        className="plant-image-card "
      />
      <h2>Description:</h2>
      <p>{plant.description}</p>
      <h2>Seasons:</h2>
      <p>{plant.seasons}</p>
      <h2>Uses:</h2>
      <p>{plant.uses}</p>
      <h2>Harvesting Seasons:</h2>
      <p>{plant.harvesting_seasons}</p>
      <h2>How to Harvest:</h2>
      <p>{plant.how_to_harvest}</p>
      <h2>Pesticides:</h2>
      <p>{plant.pesticides}</p>
      <h2>Fertilizers:</h2>
      <p>{plant.fertilizers}</p>
      <h2>Climate and Soil Requirements:</h2>
      <p>
        <strong>Climate:</strong> {plant.climate_and_soil_requirements.climate}
      </p>
      <p>
        <strong>Soil:</strong> {plant.climate_and_soil_requirements.soil}
      </p>
      <h2>Planting and Cultivation:</h2>
      <p>{plant.planting_and_cultivation}</p>
      <h2>Irrigation and Water Management:</h2>
      <p>{plant.irrigation_and_water_management}</p>
      <h2>Market and Economic Information:</h2>
      <p>{plant.market_and_economic_information}</p>
      <h2>Diseases:</h2>
      <ul>
        {plant.diseases.map((disease, index) => (
          <li key={index}>
            <strong>{disease.name}:</strong> {disease.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantDetails;
