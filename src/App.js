import "./App.css";
import NumCt from "./Component/NumCt";
import Main from "./Component/Main";
import { useState } from "react";

function App() {
  const [mainGameTF, setMainGameTF] = useState(true);
  const [chooseDif, setChooseDif] = useState(0);
  function mainOrGame(difficult, e) {
    setMainGameTF(false);
    setChooseDif(difficult);
    e.preventDefault();
  }
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#101517",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {mainGameTF ? (
        <Main mainOrGame={mainOrGame}></Main>
      ) : (
        <NumCt chooseDif={chooseDif} setMainGameTF={setMainGameTF}></NumCt>
      )}
    </div>
  );
}

export default App;
