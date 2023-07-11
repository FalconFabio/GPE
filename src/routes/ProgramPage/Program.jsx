import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import TrainingLevelComponent from "./Component/startProgram/TrainingLevel/TrainingLevel";
import TrainingTimeComponent from "./Component/startProgram/TrainingTime/TrainingTime";
import StartButton from "./Component/startProgram/StartButton/startButton";
import ProgramHeader from "./Component/startProgram/ProgramHeader/ProgramHeader";

export default function Program() {
  return (
    <div>
      <NavigationBar />
      <ProgramHeader />
      <TrainingTimeComponent />
      <br />
      <TrainingLevelComponent />
      <br />
      <br />{" "}
      <center>
        <StartButton />
      </center>
    </div>
  );
}
