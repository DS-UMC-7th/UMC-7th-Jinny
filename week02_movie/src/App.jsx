import MoviesPage from "./components/MoviesPage";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/root-layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "search", element: <Search /> },
      { path: "category", element: <Category /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
