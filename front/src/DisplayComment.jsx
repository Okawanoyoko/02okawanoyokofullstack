import React from "react";
// import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./App.css";

function DisplayComment({ comments }) {
  return (
    <div>
      {comments.map((eachObj) => (
        <Card key={eachObj.id} className="mb-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>{eachObj.comment}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default DisplayComment;
