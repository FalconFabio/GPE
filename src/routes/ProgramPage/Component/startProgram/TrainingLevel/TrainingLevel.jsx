import "./TrainingLevel.css";
import { useState } from "react";

export default function TrainingLevelComponent() {
  const [selectedTime, setSelectedTime] = useState(""); // État pour stocker la valeur sélectionnée
  const trainingTime = "Niveau de performance";

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
        <option value="">Basique</option>
        <option value="60">Normal</option>
        <option value="30">Permorfance</option>
      </select>
    </div>
  );
}
