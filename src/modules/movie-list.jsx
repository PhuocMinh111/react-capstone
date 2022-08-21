import React, { useState, useEffect } from "react";
import { fetchMovieListApi } from "../services/movie";
import SingleMovie from "./singleMovie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function MovieList({ movieToShow, btn }) {
  const [data, setData] = useState([]);
  const { final } = useSelector((state) => state.langReducer);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieList();
  }, []);

  async function fetchMovieList() {
    const result = await fetchMovieListApi();

    const data = result.data;
    // if (movieToShow !== null) {

    //    setData(data.content.filter((ele, index) => index < movieToShow));
    // }
    setData(data.content);
  }

  return (
    <Wrapper className="row mx-auto py-4 mt-5">
      <h2 className="mb-3">{final.showing}:</h2>
      {data.slice(0, movieToShow).map((item, index) => {
        return <SingleMovie key={index} movie={item} />;
      })}
      {btn && (
        <div className="d-flex mt-3 justify-content-center mx-auto">
          <button
            onClick={() => navigate("/movieList")}
            className="btn more-button  btn-primary"
          >
            {final.more}
          </button>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .more-button {
    background: linear-gradient(to left, #febb3d, #f54784);
    border: none;
  }
`;
