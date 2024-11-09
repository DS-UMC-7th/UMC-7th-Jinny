import MoviesPage from "./components/MoviesPage";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/root-layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Category from "./pages/Category";
import NowPlaying from "./pages/Now-Playing";
import Popular from "./pages/Popular";
import TopRated from "./pages/Top-Rated";
import UpComing from "./pages/Up-Coming";
const popularMoviesUrl = `/movie/popular?language=ko&page=1&region=KR`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MoviesPage url={popularMoviesUrl} />,
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "search", element: <Search /> },
      { path: "category", element: <Category /> },
    ],
  },
  {
    path: "/movies",
    element: <RootLayout />,
    children: [
      { path: "now-playing", element: <NowPlaying /> },
      { path: "popular", element: <Popular /> },
      { path: "top-rated", element: <TopRated /> },
      { path: "up-coming", element: <UpComing /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
