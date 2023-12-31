import React from 'react';
import './App.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import Usa from "./pages/Usa";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/usa" replace/>}/>
        <Route path="usa" element={<Usa/>}/>
      </Route>
    </Routes>
  );
}

export default App;
