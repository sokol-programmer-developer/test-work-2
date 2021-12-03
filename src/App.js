import React from "react";
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from "./components/Home";
import Article from "./components/Article";

const App = () => {

  return (
      <div className="App">
          <Routes>
             <Route path="/" element={<Home />} exact/>
             <Route path="/Article" element={<Article />} exact/>
          </Routes>
      </div>
  );
}

export default App;
