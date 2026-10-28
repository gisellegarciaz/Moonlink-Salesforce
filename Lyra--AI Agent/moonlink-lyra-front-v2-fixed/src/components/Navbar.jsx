import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#inicio" aria-label="Moonlink">
        <img src="/assets/moonlink-logo.png" alt="" />
        <span>MOON<span>LINK</span></span>
      </a>

      <nav className="nav-links">
        <a href="#ajuda">Central de ajuda</a>
        <a href="#atendimento">Atendimento</a>
      </nav>

      <a className="nav-client" href="#atendimento">
        Área do cliente
        <ArrowUpRight size={15} strokeWidth={1.7} />
      </a>
    </header>
  )
}