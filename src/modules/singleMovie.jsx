import React from "react";
import { Card, Button } from "react-bootstrap";

export default function SingleMovie({ movie }) {
  return (
    <Card className="col-lg-3 col-sm-12 mx-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.hinhAnh} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{movie.moTa}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
