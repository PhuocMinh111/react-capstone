import React, { useState, useEffect } from "react";
import { fetchMovieListApi } from "../services/movie";
import SingleMovie from "./singleMovie";
import { useSelector } from "react-redux";
export default function MovieList() {
  const [data, setData] = useState([]);
  const { final } = useSelector((state) => state.langReducer);
  useEffect(() => {
    fetchMovieList();
  }, []);
  async function fetchMovieList() {
    const result = await fetchMovieListApi();
    const data = result.data;

    setData(data.content);
  }

  return (
    <div className="row p-3 mt-5">
      <h2 className="mb-3">{final.showing}:</h2>
      {data.map((item) => (
        <SingleMovie key={item.maPhim} movie={item} />
      ))}
    </div>
  );
}
