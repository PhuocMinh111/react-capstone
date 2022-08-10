import { useRoutes } from "react-router-dom";
// import Home from "../pages/home/home";
// import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/login/login";
// import MovieDetail from "../pages/movie-detail/movie-detail";
import MovieList from "../modules/movie-list";
import { lazy } from "react";
const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Home = lazy(() => import("../pages/home/home"));
const MovieDetail = lazy(() => import("../pages/movie-detail/movie-detail"));

export default function Routes() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetail />,
        },
        {
          path: "/movieList",
          element: <MovieList />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return routing;
}
