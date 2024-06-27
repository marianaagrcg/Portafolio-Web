import React, { useState } from 'react'
import "./global.css";
import Sidebar from './components/Sidebar'
//import { Outlet } from "react-router-dom"
import PortafolioPage from './pages/PortafolioPage'
import ContactMe from './components/ContactMe';
function App() {
  return (
    <>
      <div>
        <header>
          <Sidebar />
        </header>
        <main>
          <PortafolioPage/>
        </main>
        <footer>
          <ContactMe/>
        </footer>
      </div>
    </>
  )
}

export default App
