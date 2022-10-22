import { useEffect, useState } from "react";
export default function NumCt(props) {
  //랜덤 숫자 생성
  function shuffleRandom(n) {
    let ar = [];
    let temp;
    let rnum;
    for (let i = 1; i <= n; i++) {
      ar.push(i);
    }
    for (let i = 0; i < ar.length; i++) {
      rnum = Math.floor(Math.random() * n);
      temp = ar[i];
      ar[i] = ar[rnum];
      ar[rnum] = temp;
    }
    return ar;
  }
  const [boxCnt, setBoxCnt] = useState(0);
  const [numArr, setNumArr] = useState([]);
  const [startNum, setStartNum] = useState(1);
  useEffect(() => {
    if (props.chooseDif === 1) {
      setBoxCnt(4);
    } else if (props.chooseDif === 2) {
      setBoxCnt(5);
    } else if (props.chooseDif === 3) {
      setBoxCnt(6);
    } else if (props.chooseDif === 4) {
      setBoxCnt(7);
    } else if (props.chooseDif === 5) {
      setBoxCnt(8);
    }
    // console.log(123);
  }, [props.chooseDif]);
  useEffect(() => {
    setNumArr(shuffleRandom(boxCnt * boxCnt));
  }, [boxCnt]);
  //숫자 박스 안보이게 하기.
  function displayNone(e, num) {
    if (startNum === num) {
      setStartNum(startNum + 1);
      e.target.style.backgroundColor = "#101517";
      e.target.style.color = "#101517";
    } else {
      return;
    }
  }
  //컴포넌트 렌더하고 숫자 박스 세팅
  const numBox = numArr.map(function (num, index) {
    return (
      <div
        style={{
          backgroundColor: "rgb(44 47 46)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
        key={index}
        onClick={function (e) {
          displayNone(e, num);
        }}
      >
        {num}
      </div>
    );
  });
  //시간초 카운팅
  const [startTime, setStartTime] = useState(new Date().getTime());
  //숫자 박스 누를때 마다 다 눌렀는지 확인, 다 누르면 시간초 구하기.
  const [showWhat, setShowWhat] = useState(true);
  useEffect(() => {
    if (boxCnt * boxCnt === startNum - 1 && boxCnt !== 0) {
      setStartTime((new Date().getTime() - startTime) / 1000);
      setShowWhat(false);
      // let playTime = (new Date() - startTime) / 1000;
      // if (confirm(playTime, "초 걸렸습니다. 메인으로 돌아가겠습니까?")) {
      //   // console.log(alert(playTime, "초 걸렸습니다."));
      //   props.mainGameTF = true;
      // } else {
      //   alert("메일으로 돌아갑니다~~");
      //   props.mainGameTF = true;
      // }
    }
  }, [startNum]);
  function goToMain() {
    props.setMainGameTF(true);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#101517",
        color: "rgb(225 225 225)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: showWhat ? "none" : "flex",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>{startTime}초 걸렸습니다.</h1>
      </div>
      <div
        className="grid"
        style={{
          display: showWhat ? "grid" : "none",
          gridTemplateRows: `repeat(${boxCnt},100px)`,
          gridTemplateColumns: `repeat(${boxCnt},100px)`,
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          // marginTop: "100px",
          // height: "100%",
        }}
      >
        {numBox}
      </div>
      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            backgroundColor: "rgb(121 124 121)" /* Green */,
            border: "none",
            color: "white",
            padding: "10px 25px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline - block",
            fontSize: "14px",
            borderRadius: "8px",
          }}
          onClick={goToMain}
        >
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
