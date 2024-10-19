import React from 'react';
import Link from 'next/link';

const Popup = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupBox}>
        <h2>CONFIRM TO UPLOAD RESUME</h2>
        <div style={styles.popupButtons}>
          <button style={{ ...styles.popupBtn, ...styles.yes }} onClick={onConfirm}>
            YES
          </button>
          <button style={{ ...styles.popupBtn, ...styles.no }} onClick={onCancel}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupBox: {
    backgroundColor: 'white',
    padding: '30px',
    border: '2px solid #2a519d',
    borderRadius: '10px',
    textAlign: 'center',
  },
  popupButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  popupBtn: {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  yes: {
    backgroundColor: '#2a519d',
    color: 'white',
    border: 'none',
  },
  no: {
    backgroundColor: 'white',
    color: '#2a519d',
    border: '2px solid #2a519d',
  },
};

export default Popup;
