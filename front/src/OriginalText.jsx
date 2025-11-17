import React from "react";
import { useState } from "react";
import Comment from "./Comment";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const OriginalText = () => {
  const [data, setData] = useState(undefined);
  const [clicked, setClick] = useState(false);
  const [selected, setSelected] = useState(false);

  function displayText() {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/originaltext");
      const json = await response.json();
      console.log("とれてますぅ？", json);
      setData(json);
      setClick(true);
    }
    fetchData();
  }
  return (
    <>
      {!clicked ? (
        <>
          <h1>Welcome to DRC</h1>
          <h3> - Select book and start reading! -</h3>
          <button className="button1" onClick={displayText}>
            日本書紀
          </button>
          <button className="button2">万葉集</button>
        </>
      ) : (
        <>
          <h2>{JSON.stringify(data[0]["title"])}</h2>
          <p onClick={<Comment />}>{JSON.stringify(data[0]["text"])}</p>
        </>
      )}
    </>
  );
};

export default OriginalText;
