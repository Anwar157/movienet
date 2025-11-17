import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Components/LayOut/HomeLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Login from "../Pages/LoginPage/Login";
import SignIn from "../Pages/SignPage/SignIn";
import AllMoviePage from "../Pages/AllMoviePage/AllMoviePage";
import MyCollection from "../Pages/MyCollection/MyCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Homepage></Homepage> },
      { path: "/login", element: <Login></Login> },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/allMovies", element: <AllMoviePage></AllMoviePage> },
      { path: "myCollection", element: <MyCollection></MyCollection> },
    ],
  },
  {
    path: "auth",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "*/",
    element: "error 404",
  },
]);
export default router;
