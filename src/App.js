import React from "react";
import Signup from "./Pages/Signup/Signup";
import Onboarding from "./Pages/Onboarding/Onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes path="/">
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Onboarding" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
