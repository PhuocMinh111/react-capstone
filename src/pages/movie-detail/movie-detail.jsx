import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { fetchSingleMovieApi } from "../../services/movie";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Youtube from "react-youtube";
export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const [movieId, setMovieId] = useState("");
  const param = useParams();
  const opt = {
    height: "390",
    width: "600",
    playerVars: {
      autoplay: false,
    },
  };
  // const langState = useSelector((state) => state.langState);
  // const { final } = langState;
  const { state } = useSelector((state) => state.langReducer);
  useEffect(() => {
    fetchMovie();
  }, []);
  async function fetchMovie() {
    const result = await fetchSingleMovieApi(param.movieID);
    const data = await result.data;
    const movieUrl = await data.content.trailer;
    const trailerId = movieUrl.split("v=")[1] || movieUrl.split("be/")[1];
    setMovieId(trailerId);
    setMovie(data);
  }

  return movie ? (
    <Wrapper className="p-lg-5 p-sm-0 p-3 row">
      <div className="col-4">
        <img
          className="img-fluid mt-4 shadow"
          src={movie.content.hinhAnh}
          alt=""
          srcset=""
        />
      </div>
      <div className="col-8 p-3">
        <h3>{movie.content.tenPhim}</h3>
        <div className="" id="player">
          {/* <iframe
            width="560"
            height="315"
            src={movie.content.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> */}
          <h4 className="d-inline">trailer :</h4>
          {movieId ? <Youtube opts={opt} videoId={movieId} /> : <Loader />}
        </div>
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
