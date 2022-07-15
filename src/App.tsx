import React from 'react';
import {Routes, Route } from "react-router-dom";
import { FavoritesPage } from './pages/FavoritesPage';
import { HomePage } from './pages/HomePage';
import { Navigator } from "./components/Navigator";

function App() {
  return (
    <>
    <Navigator />
    <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/favorites' element={ <FavoritesPage />} />
    </Routes>
    </>
  )
}

export default App;
