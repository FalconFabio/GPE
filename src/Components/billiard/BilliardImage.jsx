import billiardImage from "../../assets/billiard.jpg";
import "./BilliardImage.css"; // Fichier CSS pour le style de l'image

export default function BilliardImage() {
  return (
    <div className="billiard-image-container">
      <img src={billiardImage} alt="billiardImage" className="billiard-image" />
    </div>
  );
}
