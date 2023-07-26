import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Admin from "../components/Admin";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "admin/:password",
      element: <Admin />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;