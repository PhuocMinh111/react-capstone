import { useRoutes } from "react-router-dom";
// import Home from "../pages/home/home";
// import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/login/login";
// import MovieDetail from "../pages/movie-detail/movie-detail";
import MovieList from "../modules/movie-list";
import { lazy } from "react";
import AdminLayout from "../layouts/AdminLayout";
import Booking from "../pages/booking/booking";
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
        {
          path: "booking/:maLichChieu",
          element: <Booking />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
    },
  ]);
  return routing;
}
