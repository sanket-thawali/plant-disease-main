import React from 'react';
import PropTypes from 'prop-types';
import './PlantDetailCard.css'; // Importing the CSS file for styling

const PlantDetailCard = ({ plant }) => {
    return (
        <div className="plant-detail-card">
            <h1>{plant.name}</h1>
            <img src={plant.image_url} alt={plant.name} className="plant-image" />
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
            <p>{JSON.stringify(plant.climate_and_soil_requirements)}</p>
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


PlantDetailCard.propTypes = {
    plant: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        seasons: PropTypes.string.isRequired,
        uses: PropTypes.string.isRequired,
        harvesting_seasons: PropTypes.string.isRequired,
        how_to_harvest: PropTypes.string.isRequired,
        pesticides: PropTypes.string.isRequired,
        fertilizers: PropTypes.string.isRequired,
        climate_and_soil_requirements: PropTypes.object.isRequired,
        planting_and_cultivation: PropTypes.string.isRequired,
        irrigation_and_water_management: PropTypes.string.isRequired,
        market_and_economic_information: PropTypes.string.isRequired,
        diseases: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};


export default PlantDetailCard;
