import "./StartButton.css";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
  const navigate = useNavigate();

  const handleStartProgramClick = () => {
    navigate("/execution");
  };

  return (
    <button className="styled-button" onClick={handleStartProgramClick}>
      Commencer le programme
    </button>
  );
}
