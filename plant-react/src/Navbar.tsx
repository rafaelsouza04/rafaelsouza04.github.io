"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Home, Search, Heart, Sprout } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Detecta quando a página é rolada para adicionar sombra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fecha o menu mobile quando uma rota é selecionada
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Verifica se o link está ativo
  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm text-green-700 shadow-md"
          : "bg-gradient-to-r from-green-600 to-green-500 text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold transition-colors duration-200 hover:opacity-80"
          >
            <span className="text-2xl">🌱</span>
            <span>Plantas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={isActive("/")} scrolled={scrolled}>
              <Home size={18} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/search" isActive={isActive("/search")} scrolled={scrolled}>
              <Search size={18} />
              <span>Pesquisar</span>
            </NavLink>

            <NavLink to="/favoritos" isActive={isActive("/favoritos")} scrolled={scrolled}>
              <Heart size={18} />
              <span>Favoritos</span>
            </NavLink>

            <NavLink to="/test" isActive={isActive("/test")} scrolled={scrolled}>
              <Sprout size={18} />
              <span>Horta</span>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-green-700/20 transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            <MobileNavLink to="/" isActive={isActive("/")} scrolled={scrolled}>
              <Home size={18} />
              <span>Home</span>
            </MobileNavLink>

            <MobileNavLink to="/search" isActive={isActive("/search")} scrolled={scrolled}>
              <Search size={18} />
              <span>Pesquisar</span>
            </MobileNavLink>

            <MobileNavLink to="/favoritos" isActive={isActive("/favoritos")} scrolled={scrolled}>
              <Heart size={18} />
              <span>Favoritos</span>
            </MobileNavLink>

            <MobileNavLink to="/test" isActive={isActive("/test")} scrolled={scrolled}>
              <Sprout size={18} />
              <span>Horta</span>
            </MobileNavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

// Componente para links de navegação desktop
function NavLink({
  children,
  to,
  isActive,
  scrolled,
}: {
  children: React.ReactNode
  to: string
  isActive: boolean
  scrolled: boolean
}) {
  return (
    <Link
      to={to}
      className={`
        flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200
        ${isActive ? (scrolled ? "bg-green-100 text-green-700" : "bg-white/20 text-white") : "hover:bg-green-700/20"}
      `}
    >
      {children}
    </Link>
  )
}

// Componente para links de navegação mobile
function MobileNavLink({
  children,
  to,
  isActive,
  scrolled,
}: {
  children: React.ReactNode
  to: string
  isActive: boolean
  scrolled: boolean
}) {
  return (
    <Link
      to={to}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium
        transition-all duration-200
        ${isActive ? (scrolled ? "bg-green-100 text-green-700" : "bg-white/10 text-white") : "hover:bg-green-700/10"}
      `}
    >
      {children}
    </Link>
  )
}
