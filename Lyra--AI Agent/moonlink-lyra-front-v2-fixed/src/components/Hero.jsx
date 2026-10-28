import React from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import LyraAvatar from './LyraAvatar'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          ATENDIMENTO MOONLINK
        </div>

        <h1>
          Conexão que
          <em> entende você.</em>
        </h1>

        <p className="hero-text">
          Quando alguma coisa sair do esperado, a Lyra está aqui.
          Um atendimento mais simples, humano e conectado à Moonlink.
        </p>

        <a className="hero-cta" href="#atendimento">
          <span>Falar com a Lyra</span>
          <span className="cta-icon"><ArrowDown size={17} /></span>
        </a>
      </div>

      <div className="hero-orbit">
        <div className="orbit-line orbit-line--one" />
        <div className="orbit-line orbit-line--two" />
        <div className="orbit-dot orbit-dot--violet" />
        <div className="orbit-dot orbit-dot--yellow" />
        <LyraAvatar mood="happy" />
        <div className="lyra-label">
          <Sparkles size={14} />
          <span>LYRA</span>
          <small>assistente Moonlink</small>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL PARA EXPLORAR</span>
        <ArrowDown size={15} />
      </div>
    </section>
  )
}