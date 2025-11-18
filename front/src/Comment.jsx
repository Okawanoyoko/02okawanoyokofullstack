import React from "react";
import { useState } from "react";
// import { comment } from "../../back/instanceKnexForExpress";

function Comment() {
  const [text, setComment] = useState("");
  const [postClicked, setPostClicked] = useState(false);

  function holdText(event) {
    setComment(event.target.value);
    console.log("こちら", event.target.value);
  }

  function postComment() {
    console.log(text);
    console.log(typeof text); //string
    const postRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { comment: text },
    };
    setPostClicked(true);
    fetch("/api/comment", postRequest).then((response) => {
      console.log("サーバーからのレスポンス:", response.data);
      postRequest();
    });
  }

  return (
    <>
      <input onChange={holdText} className="comment" type="text" />
      <button onClick={postComment}>POST</button>
      <button>DELETE</button>
      <input className="upload__button" type="file"></input>
    </>
  );
}

export default Comment;
