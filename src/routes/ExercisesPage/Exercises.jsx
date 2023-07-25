import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Space from "./components/square-component/separation/space";
import SquareComponent from "./components/square-component/square.component";

export default function Exercises() {
  return (
    <div>
      <NavigationBar />
      <Space number={2} />
      <SquareComponent />
    </div>
  );
}
