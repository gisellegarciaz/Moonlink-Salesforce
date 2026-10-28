import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span>MOON<span>LINK</span></span>
        <small>INTERNET SEM FRONTEIRAS</small>
      </div>
      <div className="footer-copy">Tecnologia hoje. Mais possibilidades amanhã.</div>
      <a href="#inicio" className="footer-back">
        Voltar ao início <ArrowUpRight size={15} />
      </a>
    </footer>
  )
}