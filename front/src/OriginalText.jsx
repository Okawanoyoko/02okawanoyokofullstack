import React from "react";
import { useState, useEffect } from "react";
import DisplayComment from "./DisplayComment";
import PostComment from "./PostComment";
import "./App.css";

const OriginalText = () => {
  const [data, setData] = useState(undefined);
  const [clicked, setClick] = useState(false);
  const [selected, setSelected] = useState(false);
  const [comments, setComments] = useState([]);

  //原文データをフェッチして表示
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

  //日本初期ボタンクリック
  function select() {
    setSelected(true);
  }

  async function autoFetchComment() {
    const res = await fetch("/api/comment");
    const json = await res.json();
    setComments(json); //最新commentsがとれてる。
  }

  useEffect(() => {
    async function fetchComment() {
      await autoFetchComment();
    }
    fetchComment();
  });

  return !clicked ? (
    <>
      {" "}
      <div className="top">
        <h1>Welcome to DRC</h1>
        <h3> - Select book and start reading! -</h3>
        <button className="button1" onClick={displayText}>
          日本書紀
        </button>
        <button className="button2">万葉集</button>
      </div>
    </>
  ) : !selected ? (
    <>
      <h2 style={{ position: "fixed", top: 100 }}>{data[0]["title"]}</h2>
      <div className="grid">
        <div>
          <p onClick={select}>{data[0]["text"]}</p>
        </div>
        <div>
          <DisplayComment comments={comments} />
        </div>
      </div>
    </>
  ) : (
    <>
      <h2 style={{ position: "fixed" }}>{data[0]["title"]}</h2>
      <div className="grid">
        <div>
          <p onClick={select}>{data[0]["text"]}</p>{" "}
        </div>
        <div>
          <DisplayComment comments={comments} />
        </div>
      </div>
      <div className="input">
        <PostComment AutoFetchComment={autoFetchComment} />
      </div>
    </>
  );
};

export default OriginalText;
