import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Add from "./components/Admin/Add/Add";
import List from "./components/Admin/List/List";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/list" element={<List />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<List />} />

          <Route path="/admin/add" element={<Add />} />
        </Route> */}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
