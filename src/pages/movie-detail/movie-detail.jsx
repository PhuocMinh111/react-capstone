import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { fetchSingleMovieApi } from "../../services/movie";
import styled from "styled-components";
export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const param = useParams();
  useEffect(() => {
    fetchMovie();
  }, []);
  async function fetchMovie() {
    const result = await fetchSingleMovieApi(param.movieID);
    const data = await result.data;
    console.log(data);

    setMovie(data);
  }

  return movie ? (
    <Wrapper className="p-lg-5 p-sm-0 row">
      <div className="col-4">
        <img
          className="img-fluid shadow"
          src={movie.content.hinhAnh}
          alt=""
          srcset=""
        />
      </div>
      <div className="col-8 p-3">
        <h3>{movie.content.tenPhim}</h3>
      </div>
    </Wrapper>
  ) : (
    <Loader />
  );
}

const Wrapper = styled.div`
  img {
    height: 50vh;
    object-fit: cover;
    background-position: center;
    border: 8px solid #9e9e9e;
  }
`;
