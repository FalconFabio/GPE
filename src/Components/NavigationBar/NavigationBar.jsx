import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              PoolSkills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises" className="nav-link">
              Exercices
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/program" className="nav-link">
              Programme
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/course" className="nav-link">
              Cours
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              Déconnexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
