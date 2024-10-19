"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); 

  const handleUploadClick = (event) => {
    event.preventDefault();
    setShowPopup(true);  
  };

  const handleConfirm = () => {
    setShowPopup(false);
    if (selectedFile) {
      console.log("Selected file:", selectedFile.name);
      alert('File uploaded successfully.');
    } else {
      alert('No file selected.');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Navbar />
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer}>
          <h1 style={styles.title}>UPLOAD RESUME</h1>
          <form onSubmit={handleUploadClick} style={styles.form}>
            <label style={styles.label}>
              <input
                type="file"
                onChange={handleFileChange}
                style={styles.inputFile}
              />
              <div style={styles.dropArea}>
                <div style={styles.icon}>☁️</div>
                <p>drag & drop or click to upload</p>
              </div>
            </label>
            <button type="submit" style={styles.uploadButton}>
              UPLOAD
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      <Popup 
        isOpen={showPopup} 
        onConfirm={handleConfirm} 
        onCancel={handleCancel} 
      />
    </div>
  );
}

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#F1F5F9", 
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "#fff",  
    borderRadius: "20px",     
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)", 
    width: "670px",           
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",            
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",            
  },
  label: {
    width: "100%",
  },
  inputFile: {
    display: "none",
  },
  dropArea: {
    padding: "20px",
    border: "2px dashed #ADD8E6",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",            
    textAlign: "center",
  },
  icon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  uploadButton: {
    marginTop: "20px",
    backgroundColor: "#00008B",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    width: "100%",           
    textAlign: "center",
  },
};
