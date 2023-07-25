// square.component.jsx

import { useState } from "react";
import "./square.component.css"; // Importez votre fichier CSS pour le style du composant SquareComponent
import image1 from "../../../../assets/billiard.jpg";
import image2 from "../../../../assets/billiard.jpg";
import image3 from "../../../../assets/billiard.jpg";
// Importez d'autres images selon vos besoins

const SquareComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const squaresPerPage = 12;
  const totalSquares = 20; // Nombre total de carrés

  const totalPages = Math.ceil(totalSquares / squaresPerPage);

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderSquares = () => {
    const startIndex = (currentPage - 1) * squaresPerPage;
    const endIndex = startIndex + squaresPerPage;

    const squares = [];

    for (let i = startIndex; i < endIndex && i < totalSquares; i++) {
      const imagePath = getImagePath(i);
      squares.push(
        <div key={i} className="square">
          <img
            src={imagePath}
            alt={`Image ${i + 1}`}
            className="square-image"
          />
        </div>
      );
    }

    return squares;
  };

  const getImagePath = (index) => {
    // Logique pour obtenir le chemin de l'image en fonction de l'index
    // Exemple : return `../assets/image${index + 1}.jpg`;

    // Pour cet exemple, nous utilisons des images statiques
    const images = [image1, image2, image3];
    return images[index % images.length];
  };

  return (
    <div>
      <div className="content">{renderSquares()}</div>
      <br></br>
      <br></br>
      <div className="pagination">
        <button onClick={handleClickPrevious}>Précédent</button>
        <button onClick={handleClickNext}>Suivant</button>
      </div>
    </div>
  );
};

export default SquareComponent;
