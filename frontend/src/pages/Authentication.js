import React, { useState } from "react";
import FarmerLoginComponent from "../components/FarmerLoginComponent";
import VolunteerLoginComponent from "../components/VolunteerLoginComponent";
import FarmerSignupComponent from "../components/FarmerSignupComponent";
import VolunteerSignupComponent from "../components/VolunteerSignupComponent";
import "../css/Login.css";

const Authentication = (props) => {
  const [showFarmerLogin, setShowFarmerLogin] = useState(true);
  const [showVolunteerLogin, setShowVolunteerLogin] = useState(false);
  const [showFarmerSignup, setShowFarmerSignup] = useState(false);
  const [showVolunteerSignup, setShowVolunteerSignup] = useState(false);

  setTimeout(() => {
    props.alterLogin(true);
  }, 100);

  return (
    <div className="auth-container">
      <div className="auth-button">
        <button
          className={`main-button ${showFarmerLogin || showFarmerSignup ? 'active' : ''}`}
          onClick={() => {
            setShowFarmerLogin(true);
            setShowFarmerSignup(false);
            setShowVolunteerLogin(false);
            setShowVolunteerSignup(false);
          }}
        >
          Farmer
        </button>
        <button
          className={`main-button ${showVolunteerLogin || showVolunteerSignup ? 'active' : ''}`}
          onClick={() => {
            setShowVolunteerLogin(true);
            setShowVolunteerSignup(false);
            setShowFarmerLogin(false);
            setShowFarmerSignup(false);
          }}
        >
          Volunteer
        </button>
      </div>
      {showFarmerLogin && (
        <div className="auth-button">
          <button
            className="active"
            onClick={() => {
              setShowFarmerLogin(true);
              setShowFarmerSignup(false);
            }}
          >
             Login
          </button>
          <button
            className="deactive"
            onClick={() => {
              setShowFarmerLogin(false);
              setShowFarmerSignup(true);
            }}
          >
             SignUp
          </button>
        </div>
      )}
      {showVolunteerLogin && (
        <div className="auth-button">
          <button
            className="active"
            onClick={() => {
              setShowVolunteerLogin(true);
              setShowVolunteerSignup(false);
            }}
          >
             Login
          </button>
          <button
            className="deactive"
            onClick={() => {
              setShowVolunteerLogin(false);
              setShowVolunteerSignup(true);
            }}
          >
            SignUp
          </button>
        </div>
      )}
      <div className="auth-form">
        {showFarmerLogin && <FarmerLoginComponent />}
        {showVolunteerLogin && <VolunteerLoginComponent />}
        {showFarmerSignup && <FarmerSignupComponent />}
        {showVolunteerSignup && <VolunteerSignupComponent />}
      </div>
    </div>
  );
};

export default Authentication;
