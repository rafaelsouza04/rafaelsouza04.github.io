import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Favoritos from "./pages/Favoritos"
import Horta from "./pages/Horta"
import Navbar from "./Navbar"
import PageTransition from "./page-transition"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Adiciona padding-top para compensar a navbar fixa */}
      <main className="pt-16">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/test" element={<Horta />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </PageTransition>
      </main>
    </div>
  )
}

export default App
