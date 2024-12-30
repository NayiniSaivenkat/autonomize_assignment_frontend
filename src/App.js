import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescriptionPage from "./pages/DescriptionPage";
import FollowerDetailsPage from "./pages/FollowerDetailsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/followers/:username" element={<FollowerDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
