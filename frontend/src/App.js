import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PlantInfo from "./pages/PlantInfo"; // Importing the new PlantInfo component
import PlantDetails from "./pages/PlantDetails"; // Importing the new PlantDetail component
import { useAuthContext } from "./hooks/useAuthContext";
// import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PredictionPage from "./pages/PredictionPage";
import ErrorPage from "./pages/ErrorPage";
import Authentication from "./pages/Authentication";
import AboutUs from "./pages/AboutUs"; // Import AboutUs Page
import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const { user } = useAuthContext();
  const [onPrediction, setOnPrediction] = useState(false);
  const [onLogin, setOnLogin] = useState(false);

  const alterPrediction = (arg) => {
    setOnPrediction(arg);
  };

  const alterLogin = (arg) => {
    setOnLogin(arg);
  };
  

  // useEffect(() => {
  //   // Make sure the Google API init function is available globally
  //   window.googleTranslateElementInit = () => {
  //     if (window.google && window.google.translate) {
  //       new window.google.translate.TranslateElement(
  //         {
  //           pageLanguage: "en",
  //           includedLanguages: "en,hi,fr,es",
  //           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //         },
  //         "google_translate_element"
  //       );
  //     }
  //   };
  
  //   const script = document.createElement("script");
  //   script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   script.async = true;
  //   script.onerror = (err) => console.error("Google Translate script load error", err);
  //   document.body.appendChild(script);
  // }, []);
  

  return (
    <LanguageProvider>
      <div className="App">
      <div id="google_translate_element" style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}></div>
        <BrowserRouter>
          <Navbar onPrediction={onPrediction} onLogin={onLogin} />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage alterPrediction={alterPrediction} alterLogin={alterLogin} />
                }
              />
              <Route
                path="/about"
                element={<AboutUs />} // New Route for About Us
              />
              <Route
                path="/plant-info"
                element={<PlantInfo />} // New route for PlantInfo
              />
              <Route
                path="/authenticate"
                element={
                  user ? (
                    <PredictionPage alterPrediction={alterPrediction} />
                  ) : (
                    <Authentication alterLogin={alterLogin} />
                  )
                }
              />
              <Route
                path="/predict"
                element={
                  user ? (
                    <PredictionPage alterPrediction={alterPrediction} />
                  ) : (
                    <Authentication alterLogin={alterLogin} />
                  )
                }
              />
              <Route
                path="/plant-detail/:plantId"
                element={<PlantDetails />} // New route for Plant Details
              />
              <Route
                path="/404"
                element={
                  user ? (
                    <ErrorPage />
                  ) : (
                    <Authentication alterLogin={alterLogin} />
                  )
                }
              />
              <Route
                path="*"
                element={
                  user ? (
                    <Navigate to="/authenticate" />
                  ) : (
                    <Authentication alterLogin={alterLogin} />
                  )
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
