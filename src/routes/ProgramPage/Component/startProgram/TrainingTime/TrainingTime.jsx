import "./TrainingTime.css";
import { useState } from "react";

export default function TrainingTimeComponent() {
  const [selectedTime, setSelectedTime] = useState(""); // État pour stocker la valeur sélectionnée
  const trainingTime = "Temps d'entraînement";

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="training-time-container">
      <div className="label">{trainingTime}</div>
      <select
        className="select"
        value={selectedTime}
        onChange={handleTimeChange}
      >
        <option value="">Select</option>
        <option value="30">30 minutes</option>
        <option value="60">1 heure</option>
        <option value="90">1 heure et demi</option>
        <option value="120">2 heures</option>
        <option value="180">3 heures</option>
      </select>
    </div>
  );
}
