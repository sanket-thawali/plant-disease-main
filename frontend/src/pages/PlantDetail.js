import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlantDetailCard from "../components/PlantDetailCard"; // Import the new PlantDetailCard component


const PlantDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const plant = location.state?.plant;

    if (!plant) {
        return <div>No plant data available.</div>;
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: "20px", padding: "10px 15px", cursor: "pointer" }}>Go Back</button>
            <PlantDetailCard plant={plant} /> {/* Use the PlantDetailCard component */}

        </div>
    );
};

export default PlantDetail;
