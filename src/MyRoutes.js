import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Admin/Edit/Edit";
import Admin from "./pages/Admin";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import Products from "./pages/Products";

const PUBLIC_ROUTES = [
  { link: "/", element: <Home />, id: 1 },
  { link: "/products", element: <Products />, id: 4 },
  { link: "/admin", element: <Admin />, id: 2 },
  { link: "/edit/:id", element: <Edit />, id: 5 },
  { link: "/auth", element: <AuthPage />, id: 3 },
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
