import React, { useState } from "react";
import Fragen from "./components/Fragen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kategorie from "./components/Kategorie";

function App() {
  const [kategorie, setKategorie] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Kategorie setKategorie={setKategorie} />} />
          <Route path="/Fragen" element={<Fragen kategorie={kategorie} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
