import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
export default function SingleMovie({ movie }) {
  const navigate = useNavigate();
  const { final } = useSelector((state) => state.langReducer);
  return (
    <Card
      className="col-lg-3 mb-1 mx-auto col-sm-12 mx-2"
      style={{ width: "18rem" }}
    >
      {/* <Wrapper> */}
      <Card.Img variant="top" src={movie.hinhAnh} />
      <Card.Body className="card-body">
        <Card.Title>
          <span className="text-primary">{final.name}:</span> {movie.tenPhim}
        </Card.Title>
        <Card.Text className="text">{movie.moTa.slice(0, 100)}</Card.Text>
        <Button
          onClick={() => navigate(`/movie/${movie.maPhim}`)}
          style={{ fontSize: "1rem", marginLeft: "auto" }}
          className="ml-auto"
          variant="success"
        >
          {final.detail}
        </Button>
      </Card.Body>
      {/* </Wrapper> */}
    </Card>
  );
}

// const Wrapper = styled.div`
//   position: relative;
//   height: 100%;
//   .card-body {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     color: white;
//   }
// `;
