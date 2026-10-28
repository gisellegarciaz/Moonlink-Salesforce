import React from 'react'
import { ArrowUpRight, ReceiptText, Sparkles, Wifi, X } from 'lucide-react'

const icons = { wifi: Wifi, receipt: ReceiptText, sparkles: Sparkles, arrow: X }

export default function QuickActions({ actions, onSelect }) {
  return (
    <section className="quick-section" id="ajuda">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> ATALHOS</div>
          <h2>Comece por aqui.</h2>
        </div>
        <p>
          Escolha uma opção ou conte para a Lyra o que aconteceu.
          Ela vai te orientar pelo próximo passo.
        </p>
      </div>

      <div className="quick-grid">
        {actions.map((action, index) => {
          const Icon = icons[action.icon]
          return (
            <button
              className="quick-card"
              key={action.id}
              onClick={() => onSelect(action)}
              style={{ '--delay': `${index * 70}ms` }}
            >
              <span className="quick-number">0{index + 1}</span>
              <span className="quick-icon"><Icon size={20} strokeWidth={1.5} /></span>
              <span className="quick-eyebrow">{action.eyebrow}</span>
              <strong>{action.title}</strong>
              <span className="quick-description">{action.description}</span>
              <span className="quick-arrow"><ArrowUpRight size={17} /></span>
            </button>
          )
        })}
      </div>
    </section>
  )
}