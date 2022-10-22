import { useState } from "react";
export default function Main(props) {
  const [difficult, setdifficult] = useState([1, 2, 3, 4, 5]);
  const difficultBox = difficult.map(function (difficult, index) {
    return (
      <div
        style={{
          width: "200px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(44 47 46)",
          margin: "10px 0 10px 0",
          borderRadius: "15px",
        }}
        key={index}
        onClick={(e) => {
          props.mainOrGame(index + 1, e);
        }}
      >
        <h2>{difficult} 단계</h2>
      </div>
    );
  });
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#101517",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>난이도 선택</h1>
      {difficultBox}
    </div>
  );
}
