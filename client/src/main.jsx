import React from "react";
import ReactDOM from "react-dom";
import "@/index.css";
import App from "@/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* app.jsx will be the template and all pages 
      will be nested in it using the <Outlet /> 
      from react-router */}
      <Route path="/" element={<App />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root") // root element
);
