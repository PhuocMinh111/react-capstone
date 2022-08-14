import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import styled from "styled-components";
import Loader from "../../components/loader";
import { fetchShowTimeApi, fetchSingleMovieApi } from "../../services/movie";
import Accordion from "react-bootstrap/Accordion";
import ShowTime from "../../modules/showTime";
export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const [movieId, setMovieId] = useState("");
  const imgRef = useRef(null);
  const [heThongRap, setHeThongRap] = useState();
  const param = useParams();
  const opt = {
    height: "290",
    width: "500",
    playerVars: {
      autoplay: false,
    },
  };
  // const langState = useSelector((state) => state.langState);
  // const { final } = langState;
  const { final } = useSelector((state) => state.langReducer);
  // // useEffect(() => {
  // //   document.addEventListener("scroll", scrollImg);
  // //   return () => {
  // //     document.removeEventListener("scroll", scrollImg);
  // //   };
  // //   function scrollImg() {
  // //     const scrollY = window.pageYOffset;
  // //     // const screenW = window.innerWidth;
  // //     const box = imgRef.current.getBoundingClientRect();
  // //     console.log(Math.floor(box.y));
  // //     imgRef.current.style.transform = `translateY(${Math.abs(box.y)})`;
  // //     // console.log(screenW);
  // //   }
  // }, []);
  useEffect(() => {
    fetchMovie();
  }, []);
  async function fetchMovie() {
    const result = await fetchSingleMovieApi(param.movieID);
    const data = await result.data;
    const movieUrl = await data.content.trailer;
    const trailerId =
      movieUrl.split("v=")[1] ||
      movieUrl.split("be/")[1] ||
      movieUrl.split("embed/")[1];
    setMovieId(trailerId);
    setMovie(data);
  }

  console.log(heThongRap);
  return movie ? (
    <Wrapper className="p-lg-5 p-sm-0 row">
      <div className="col-lg-4 col-sm-12">
        <img
          ref={imgRef}
          className="img-fluid mx-auto mt-4 shadow"
          src={movie.content.hinhAnh}
          alt=""
          srcset=""
        />
      </div>
      <div className="col-lg-8 sol-sm-12 p-3">
        <h3>{movie.content.tenPhim}</h3>
        <div className="" id="player">
          <h4 className="d-inline">trailer :</h4>
          {movieId ? <Youtube opts={opt} videoId={movieId} /> : <Loader />}
        </div>
        <p>
          <span className="text-success">{final.desc} :</span>
          {movie.content.moTa}
        </p>
        <ShowTime />
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
