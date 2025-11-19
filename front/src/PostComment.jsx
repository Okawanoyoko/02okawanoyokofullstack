import React from "react";
import "./App.css";
import { useState } from "react";

//入力テキストのフック、およひポスト機能のみ//
function PostComment() {
  const [text, setComment] = useState("");

  //入力テキストのフック
  function holdText(event) {
    setComment(event.target.value);
  }
  //postボタンクリックしたらテキストを親（）OriginalTextに渡す
  async function post() {
    const postRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: text }),
    };
    await fetch("/api/comment", postRequest);
    // autoFetchComment();
    setComment("");
  }

  return (
    <>
      <div className>
        <input className="comment" onChange={holdText} type="text" />
        <button className="postButton" onClick={post}>
          POST
        </button>
        {/* <button>DELETE</button> */}
        {/* <input className="upload__button" type="file"></input> */}
      </div>
    </>
  );
}

export default PostComment;
