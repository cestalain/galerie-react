import React, { useState, useEffect } from "react";
import DynamicNav from "./DynamicNav";
import ImageCardGallery from "./ImageCardGallery";

// 1. Utilisez le glob pour détecter TOUS les chemins pour la navigation
const allImageModules = import.meta.glob("/src/assets/*/*");

function GalleryPage() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  // 2. Logique pour détecter les catégories (répertoires)
  useEffect(() => {
    const paths = Object.keys(allImageModules);
    const uniqueCategories = new Set();

    paths.forEach((path) => {
      // Exemple de chemin : '/src/assets/images/montagne/pic.jpg'
      const parts = path.split("/");
      const categoryName = parts[3];

      if (categoryName) {
        uniqueCategories.add(categoryName);
      }
    });

    const finalCategories = Array.from(uniqueCategories);
    // console.log("Catégories détectées :", finalCategories);
    setCategories(finalCategories);

    // Initialise la catégorie active avec la première détectée
    //console.log("Catégorie initiale :", finalCategories[0]);
    if (finalCategories.length > 0) {
      setActiveCategory(finalCategories[0]);
    }
  }, []);

  return (
    <div className="gallery-page">
      {/* 3. Passe les props à DynamicNav */}
      <DynamicNav
        categories={categories.slice(0, 5)} // Affiche les 5 premiers
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory} // Fonction de callback pour changer l'état
      />

      {/* 4. Passe la catégorie active à ImageCardGallery pour filtrer */}
      <ImageCardGallery categoryFilter={activeCategory} />
    </div>
  );
}

export default GalleryPage;
