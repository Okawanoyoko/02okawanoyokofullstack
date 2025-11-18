import React from "react";
import { useState } from "react";
import Comment from "./Comment";

// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";

const OriginalText = () => {
  const [data, setData] = useState(undefined);
  const [clicked, setClick] = useState(false);
  const [selected, setSelected] = useState(false);

  function displayText() {
    async function fetchData() {
      const response = await fetch("/api/originaltext");
      const json = await response.json();
      console.log("とれてますぅ？", json);
      setData(json);
      setClick(true);
    }
    fetchData();
  }

  function select() {
    setSelected(true);
  }

  return !clicked ? (
    <>
      <h1>Welcome to DRC</h1>
      <h3> - Select book and start reading! -</h3>
      <button className="button1" onClick={displayText}>
        日本書紀
      </button>
      <button className="button2">万葉集</button>
    </>
  ) : !selected ? (
    <>
      <h2>{JSON.stringify(data[0]["title"])}</h2>
      <p onClick={select}>{JSON.stringify(data[0]["text"])}</p>
    </>
  ) : (
    <>
      <h2>{JSON.stringify(data[0]["title"])}</h2>
      <p onClick={select}>{JSON.stringify(data[0]["text"])}</p>
      <Comment />
    </>
  );
};

export default OriginalText;
