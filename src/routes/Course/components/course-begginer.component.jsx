import "./course-begginer.component.css"; // Importez votre fichier CSS pour le style du composant BeginnerCourse

export default function BeginnerCourse() {
  return (
    <div className="beginner-course">
      <h2>
        Si vous êtes débutant, la fédération française de billard vous propose :
      </h2>
      <a
        className="beginner-link"
        href="https://m.ffbillard.com/global/telechargements/file.php?id=148"
        target="_blank"
        rel="noreferrer"
      >
        Le cahier du débutant
      </a>
    </div>
  );
}
