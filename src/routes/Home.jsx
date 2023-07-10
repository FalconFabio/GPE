import NavigationBar from "../Components/NavigationBar/NavigationBar";
import PlayerCard from "../Components/PlayerCard/PlayerCard";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <h1>Home</h1>
      <center>
        <PlayerCard />
      </center>
    </div>
  );
}
