import React, { useState, useEffect } from "react";
import { fetchMovieListApi } from "../services/movie";
import SingleMovie from "./singleMovie";
export default function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieList();
  }, []);
  async function fetchMovieList() {
    const result = await fetchMovieListApi();
    const data = result.data;
    // console.log();

    setData(data.content);
  }

  return (
    <div className="row p-3 mt-5">
      {data.map((item) => (
        <SingleMovie key={item.maPhim} movie={item} />
      ))}
    </div>
  );
}
