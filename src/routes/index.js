import { useRoutes } from "react-router-dom";
import Home from "../pages/home/home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/login/login";
import MovieDetail from "../pages/movie-detail/movie-detail";
import MovieList from "../modules/movie-list";
export default function Routes() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/movie/:movieID",
          children: <MovieDetail />
        },
        {
          path: "/movieList",
          children: <MovieList />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return routing;
}
