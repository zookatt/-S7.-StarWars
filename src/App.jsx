import UseApiContext from "./context/UseApiContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./components/List";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";


function App() {

  return (
    <UseApiContext>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute redirectPath="/login" />}>
            <Route path="/starships" element={<List />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UseApiContext >
  );
}
export default App;

