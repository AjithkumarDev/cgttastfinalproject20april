import "./App.css";
import Card from "./Component/Card/Card";
import Endbar from "./Component/Endbar/Endbar";
import FrontbarMiddle from "./Component/FrontbarMiddle/FrontbarMiddle";

import NavBar from "./Component/NavBAR/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card />
      <FrontbarMiddle />
      <Endbar />
    </div>
  );
}

export default App;
