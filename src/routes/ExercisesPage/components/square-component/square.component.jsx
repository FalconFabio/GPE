import { useState } from "react";
import "./square.component.css";

export default function SquareComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const squaresPerPage = 12; // Augmenté pour avoir plus de carrés sur une page
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
      squares.push(
        <div key={i} className="square">
          {/* Contenu du carré */}
        </div>
      );
    }

    return squares;
  };

  return (
    <div>
      <div className="navbar">{/* Votre barre de navigation ici */}</div>

      <div className="content">{renderSquares()}</div>

      <div className="pagination">
        <button onClick={handleClickPrevious}>Précédent</button>
        <button onClick={handleClickNext}>Suivant</button>
      </div>
    </div>
  );
}
