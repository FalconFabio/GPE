import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Separation from "./components/square-component/separation/separation";
import SquareComponent from "./components/square-component/square.component";
// import Separation from "./components/square-component/separation/separation";

export default function Exercises() {
  return (
    <div>
      <NavigationBar />
      <Separation number={2} />
      <SquareComponent />
    </div>
  );
}
