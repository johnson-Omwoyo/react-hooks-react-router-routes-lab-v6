import { useRouteError } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError;
  console.log(error);
  return (
    <div>
      <NavBar />
      <h1>Oops! Looks like something went wrong. </h1>
    </div>
  );
}

export default ErrorPage;
