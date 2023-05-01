import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllNotice from "./[updatenotice]";

function AppRoutert() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllNotice />} />
        <Route path="/Studentbyid" element={<Studentbyid />} />
        <Route path="/allRequstroom" element={<AllRequestRoom />} />
        <Route path="/allNotice" element={<AllNotice />} />
        <Route path="/allStudent" element={<AllStudent />} />
        <Route path="updatenotice/:id" element={<Updatenotice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutert;
