import React from "react";
import "./ImageModal.css"; // Créez ce fichier CSS à l'étape 3

function ImageModal({ image, onClose }) {
  if (!image) {
    return null; // N'affiche rien si aucune image n'est sélectionnée
  }

  return (
    // La div `modal-backdrop` ferme le modal au clic en dehors de l'image
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={image.url} alt={image.name} className="modal-image" />
        <p className="modal-caption">{image.name}</p>
      </div>
    </div>
  );
}

export default ImageModal;
