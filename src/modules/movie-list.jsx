import React, { useState, useEffect } from "react";
import { fetchMovieListApi } from "../services/movie";
import SingleMovie from "./singleMovie";
import { useSelector } from "react-redux";
export default function MovieList({ movieToShow }) {
  const [data, setData] = useState([]);
  const { final } = useSelector((state) => state.langReducer);
  useEffect(() => {
    fetchMovieList();
  }, []);
  async function fetchMovieList() {
    const result = await fetchMovieListApi();
    const data = result.data;
    console.log(movieToShow);
    // if (movieToShow !== null) {
    //   console.log(movieToShow);
    //    setData(data.content.filter((ele, index) => index < movieToShow));
    // }
    setData(data.content);
  }

  return (
    <div className="row mx-auto py-4 mt-5">
      <h2 className="mb-3">{final.showing}:</h2>
      {data.slice(0, movieToShow).map((item, index) => {
        return <SingleMovie key={index} movie={item} />;
      })}
    </div>
  );
}
