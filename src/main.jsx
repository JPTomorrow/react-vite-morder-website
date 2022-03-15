import React from "react";
import ReactDOM from "react-dom";
import "@/index.css";
import App from "@/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TestPage from "@/pages/TestPage";

const rootElement = document.getElementById("root");
const no_match_route = (
  <main style={{ padding: "1rem" }}>
    <p>There's nothing here!</p>
  </main>
);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* app.jsx will be the template and all pages 
      will be nested in it using the <Outlet /> 
      from react-router */}
      <Route path="/" element={<App />}>
        <Route path="test_page" element={<TestPage />} />
        <Route path="*" element={no_match_route} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
