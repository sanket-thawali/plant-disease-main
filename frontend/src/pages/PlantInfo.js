import React from "react";
import plantData from "../data/plants.json";
import PlantCard from "../components/PlantCard"; // Importing the new PlantCard component


const PlantInfo = () => {
  return (
    <div className="plant-info-page">
      <h2>Plant Information</h2>
      <div className="plant-card-list">
        {plantData.plants.map((plant) => (
            <PlantCard key={plant.name} title={plant.name} imageUrl={plant.image_url} id={plant.id} /> // Using PlantCard to display image and title

        ))}
      </div>
    </div>
  );
};

export default PlantInfo;
