import "./PlayerCard.css";

//

function PlayerPicture() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcWzuJi3rdAdA2CWQHUkMybzscJWj8EZJyXEePLs&s"
        alt="harry logo"
        style={{ width: "100px" }}
      />
    </div>
  );
}

export default function PlayerCard() {
  return (
    <div className="card">
      <PlayerPicture />
      <div className="card-content">
        <h2 className="card-title">HUGO</h2>
        <p className="card-description">Master</p>
        <div className="card-stats">
          <div className="stat">
            <div className="value">90</div>
            <div className="label">Précision</div>
          </div>
          <div className="stat">
            <div className="value">85</div>
            <div className="label">Contrôle</div>
          </div>
          <div className="stat">
            <div className="value">80</div>
            <div className="label">Effet</div>
          </div>
        </div>
      </div>
    </div>
  );
}
