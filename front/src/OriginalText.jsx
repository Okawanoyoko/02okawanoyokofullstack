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
      <div className={clicked ? "top" : "grid"}>
        <h1>My annotation</h1>
        <button className="button1" onClick={displayText}>
          Kume Song
        </button>
        <button className="button2">Don't look back in anger</button>
        <button className="button1">APT</button>
        <button className="button2">Subaru</button>
      </div>
    </>
  ) : (
    <>
      <h2 style={{ position: "fixed", top: 100, color: "pink" }}>
        {data[0]["title"]}
      </h2>
      <div className="grid">
        <div style={{ fontSize: 26 }} onClick={select}>
          {data[0]["text"]}
        </div>
        <div>
          <DisplayComment comments={comments} />
        </div>
        {selected && (
          <div>
            <PostComment AutoFetchComment={autoFetchComment} />
          </div>
        )}
      </div>
    </>
  );
};

export default OriginalText;
