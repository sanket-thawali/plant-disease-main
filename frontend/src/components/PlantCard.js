import React from 'react';
import './PlantCard.css'; // Importing the new CSS file for PlantCard styles


import { Link } from 'react-router-dom';

const PlantCard = ({ title, imageUrl, id }) => {

    return (
        <Link to={`/plant-detail/${id}`} className='plant-card'>

            <h3>{title}</h3> <br></br>
            <img src={imageUrl} alt={title} className="plant-image" />
        </Link>

    );
};

export default PlantCard;
