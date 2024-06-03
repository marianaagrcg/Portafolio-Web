import React, { useState } from 'react'
import "./global.css";
import Sidebar from './components/Sidebar'
//import { Outlet } from "react-router-dom"
import PortafolioPage from './pages/PortafolioPage'

function App() {
 

  return (
    <>
      <div>
        <Sidebar />
        <main>
          <div>
          <PortafolioPage/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
