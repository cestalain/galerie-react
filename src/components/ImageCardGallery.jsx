// ImageCardGallery.jsx

import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import "./ImageCardGallery.css";

// Importation de TOUTES les images (Glob non filtré)
// La clé du chemin sera utilisée pour le filtrage
const allImageModules = import.meta.glob("/src/assets/*/*.{png,jpg,jpeg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

// Le composant reçoit la catégorie active en tant que prop
function ImageCardGallery({ categoryFilter }) {
  const [imagesData, setImagesData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Exécutez le filtrage chaque fois que la catégorie active (categoryFilter) change
  useEffect(() => {
    if (!categoryFilter) return;

    const loadedImages = Object.keys(allImageModules)
      // 1. FILTRAGE : Garde uniquement les chemins qui contiennent la catégorie active
      .filter((path) => path.includes(`${categoryFilter}`))
      .map((path) => {
        const url = allImageModules[path];

        // Extraction du nom du fichier pour le titre
        const fileNameWithExtension = path.split("/").pop();
        const name = fileNameWithExtension.split(".").slice(0, -1).join(".");

        return {
          url,
          name: name.replace(/-/g, " "),
        };
      });

    setImagesData(loadedImages);
  }, [categoryFilter]); // DÉPENDANCE CLÉ : Re-filtre lorsque categoryFilter change

  // Fonctions Modal inchangées
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <div className="gallery-container">
        {imagesData.map((image, index) => (
          <div
            key={index}
            className="image-card"
            onClick={() => openModal(image)}
          >
            <div className="card-image-wrapper">
              <img src={image.url} alt={image.name} className="card-image" />
            </div>
            <div className="card-footer">
              <p className="card-title">{image.name}</p>
            </div>
          </div>
        ))}
        {imagesData.length === 0 && (
          <p>Aucune image trouvée pour cette catégorie.</p>
        )}
      </div>

      <ImageModal image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default ImageCardGallery;
