import React, { useState } from "react";
import "../css/DragDrop.css";

const DragDrop = ({ onFileChange, onRemoveClicked }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("You can only upload image files");
      return;
    }

    setImage({
      file,
      preview: URL.createObjectURL(file),
    });
    setError(null);
    onFileChange(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    document.getElementById("fileInput").value = "";
    onRemoveClicked();
  };

  const handleButtonClick = () => {
    window.open("https://plant-disease-detect-ddncxdyqqzxryamyt72kgm.streamlit.app/", "_blank");
  };

  return (
    <div className="upload-container">
      <div className="dropzone">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="input-file"
          id="fileInput"
          style={{ display: "none" }}
        />
        {!image && (
<button type="button" className="upload-button" onClick={handleButtonClick}>
  Click here to upload image
</button>
        )}
        {image && (
          <div className="image-container">
            <img src={image.preview} alt="Uploaded file" className="image" />
            <button
              type="button"
              className="remove-button"
              onClick={handleRemoveImage}
            >
              &times;
            </button>
          </div>
        )}
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default DragDrop;
