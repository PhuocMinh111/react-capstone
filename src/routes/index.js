import { useRoutes } from "react-router-dom";
import Home from "../pages/home/home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/login/login";
export default function Routes() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />
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
