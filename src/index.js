import React from "react";
import ReactDOM from "react-dom"; // Correct import path for ReactDOM
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col w-full items-center justify-center"> {/* Wrap the content in a div */}
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
