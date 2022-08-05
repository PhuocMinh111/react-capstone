import React from "react";
import Carousel from "../../components/carousel/carousel";
import Loader from "../../components/loader";
import MovieList from "../../modules/movie-list";

export default function Home() {
  return (
    <div>
      <Carousel />
      <MovieList />
    </div>
  );
}