import { useRoutes } from "react-router-dom";
import Home from "../components/home/home";
import HomeLayout from "../layouts/HomeLayout";
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
      ],
    },
  ]);
  return routing;
}
