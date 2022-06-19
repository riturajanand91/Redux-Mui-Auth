import React, { Suspense, lazy } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/layouts/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes";
import { Box, Container } from "@mui/material";
import { useAppSelector, useAppDispatch } from "./hooks";

function App() {
  let user;
  if (localStorage.hasOwnProperty("user")) {
    user = localStorage.getItem("user");
  }
  const isAuth = useAppSelector((state) => state);
  console.log(isAuth);

  return (
    <div className="App">
      {user ? <HeaderComponent></HeaderComponent> : ""}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Container maxWidth="xl">
          <Router />
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
