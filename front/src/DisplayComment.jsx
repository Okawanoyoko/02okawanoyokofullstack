import React from "react";
// import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./App.css";

function DisplayComment({ comments }) {
  async function deleteComment(theComment) {
    const deleteRequest = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: theComment }),
    };
    await fetch("/api/delete", deleteRequest);
    await fetch("/api/get/comment");
  }

  return (
    <>
      {comments.map((eachObj) => (
        <Card key={eachObj.id} className="mb-7" style={{ width: "12rem" }}>
          <Card.Body>
            <Card.Text style={{ fontSize: 11 }}>
              {eachObj.comment}

              <button
                style={{ fontSize: 8 }}
                className="trash"
                onClick={() => deleteComment(eachObj.comment)}
              >
                🗑️
              </button>
              <footer style={{ fontSize: 8 }}> {eachObj.time}</footer>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
export default DisplayComment;
