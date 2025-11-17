import React from "react";
import { useState } from "react";
import Top from "./OriginalText";

function Comment() {
  const [comment, setComment] = useState("");

  function postComment(event) {
    setComment(event.target.value);
  }

  // const [isSent, setSend] = useState(false);
  // function submit() {
  //   setSend(isSent);
  // }

  return (
    <>
      <input className="comment" type="text" />
      <button>この内容でコメント</button>
      <input className="upload__button" type="file"></input>
    </>
  );
}

export default Comment;
