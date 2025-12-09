import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";

import Home from "@/home/home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
      </MainLayout>
    </BrowserRouter>
    </>
  )
}

export default App
