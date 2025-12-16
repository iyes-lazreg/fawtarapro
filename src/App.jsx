import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Commander from "@/components/commander";
import Home from "@/home/home"
function App() {

  return (
    <>
      <BrowserRouter>
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commander" element={<Commander />} />
      </Routes>
      </MainLayout>
    </BrowserRouter>
    </>
  )
}

export default App
