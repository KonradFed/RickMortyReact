import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  );
}

export default App;
