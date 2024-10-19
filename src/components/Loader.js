// src/components/Loader.js
import React from 'react';
import './Loader.css'; // CSS path

const Loader = () => {
  return (

    <div className="loader-container">
    <div className="loader">
      <span className="loader-text">Loading</span>
      <span className="load"></span>
    </div></div>
  );
};

export default Loader;