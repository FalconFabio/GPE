import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import LogoutButton from "./components/LogoutButton/logout-button.component";

export default function LogOut() {
  return (
    <div>
      <NavigationBar />
      <center>
        <h1>Log out</h1>
        <LogoutButton />
      </center>
    </div>
  );
}
