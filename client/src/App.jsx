import Navbar from "./components/Navbar"
import Properties from "./pages/Properties"
import Contact from "./pages/Contact"
import HomePage from "./pages/Home"
import Team from "./pages/Team"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
