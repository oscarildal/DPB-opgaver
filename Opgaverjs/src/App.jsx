import { useState } from "react";
function App() {
  return (
    <> 
    <Knap/>
    <ForsidePage/>
    </>
  );
}
export default App;
function Navbar() {
  return (
    <div> 
      <Knap titel="Dashboard"/>
      <Knap titel="Kort"/>
      <Knap titel="Historik"/>
      <Knap titel="Start Opgave"/>
      </div>    
  );
}
function Knap({titel = "Knap "}) {
  return <button>{titel}</button>;
}
function ForsidePage () {
  return (
    <div>
      <RobotStatus navn="Robot 1" status="Arbejder"/>
      <RobotStatus navn="Robot 2" status="Lader"/>
      <RobotStatus navn="Robot 3" status="Lader"/>
      <RobotStatus navn="Robot 4" status="Lader"/>
    </div>
  );
}
function MiniMap() {
  return <div>Mini kort</div>;
}
function RobotStatus({navn, status}) {
  return (
    <div>
      <p>{navn}</p>
      <p>{status}</p>
    </div>
  );
}
