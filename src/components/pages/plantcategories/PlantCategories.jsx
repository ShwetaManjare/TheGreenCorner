// import React from 'react'

// const PlantCategories = () => {
//   return (
//     <div>PlantCategories</div>
//   )
// }

// export default PlantCategories


import React from "react";
import { useLocation } from "react-router-dom";

const ImageDetail = () => {
  const location = useLocation(); // Retrieve the location object
  const image = location.state; // Access the state data passed via Link

  if (!image) {
    return <p>No image data available! Please navigate from the Image List page.</p>;
  }

  return (
    <div>
      <h1>Image Detail</h1>
      <h3>Description:</h3>
      <p>{image.description}</p>

      <h3>Primary Image:</h3>
      <img
        src={image.primaryImage}
        alt="Primary"
        style={{ width: "300px", display: "block", marginBottom: "20px" }}
      />

      <h3>Secondary Images:</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {image.secondaryImages.map((secImg, index) => (
          <img
            key={index}
            src={secImg}
            alt={`Secondary ${index + 1}`}
            style={{ width: "150px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDetail;
