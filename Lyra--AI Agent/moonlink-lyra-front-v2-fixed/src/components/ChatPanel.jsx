import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { ArrowUp, ChevronDown, Paperclip, Sparkles } from 'lucide-react'
import LyraAvatar from './LyraAvatar'

export default function ChatPanel({ selectedAction }) {
  const [messages, setMessages] = useState([
    {
      from: 'lyra',
      text: 'Oi! Eu sou a Lyra. 🌙\\nEm que posso ajudar hoje?'
    }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (!selectedAction) return
    sendToLyra(selectedAction.title)
  }, [selectedAction])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function sendToLyra(text) {
    if (!text?.trim()) return

    setMessages((current) => [...current, { from: 'user', text }])
    setTyping(true)

    const action = selectedAction
    const response = action?.response ||
      'Entendi. Me conta um pouco mais sobre o que está acontecendo para eu te orientar.'

    window.setTimeout(() => {
      setTyping(false)
      setMessages((current) => [...current, { from: 'lyra', text: response }])
    }, 650)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const value = input.trim()
    if (!value) return
    setInput('')
    sendToLyra(value)
  }

  return (
    <section className="chat-section" id="atendimento">
      <div className="chat-intro">
        <div className="eyebrow"><span className="eyebrow-dot" /> FALE COM A LYRA</div>
        <h2>Seu problema.<br /><em>Nosso próximo passo.</em></h2>
        <p>
          Uma nova forma de encontrar respostas, resolver situações
          e continuar conectado.
        </p>

        <div className="status-pill">
          <span className="status-light" />
          Lyra está online
        </div>
      </div>

      <div className="chat-shell">
        <div className="chat-topbar">
          <div className="chat-profile">
            <LyraAvatar size="small" active mood={typing ? "processing" : "happy"} />
            <div>
              <strong>Lyra</strong>
              <span><i /> Assistente Moonlink</span>
            </div>
          </div>
          <button className="chat-menu" aria-label="Opções"><ChevronDown size={17} /></button>
        </div>

        <div className="chat-messages">
          <div className="chat-date">HOJE · ATENDIMENTO DIGITAL</div>

          {messages.map((message, index) => (
            <div className={`message-row message-row--${message.from}`} key={`${message.from}-${index}`}>
              {message.from === 'lyra' && <div className="message-avatar"><LyraAvatar size="small" mood={typing ? "processing" : "happy"} /></div>}
              <div className="message-bubble">
                {message.text.split('\\n').map((line, i) => <span key={i}>{line}{i < message.text.split('\\n').length - 1 && <br />}</span>)}
              </div>
            </div>
          ))}

          {typing && (
            <div className="message-row message-row--lyra">
              <div className="message-avatar"><LyraAvatar size="small" mood={typing ? "processing" : "happy"} /></div>
              <div className="message-bubble typing"><i /><i /><i /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <button type="button" aria-label="Anexar"><Paperclip size={17} /></button>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Escreva para a Lyra..."
            aria-label="Mensagem"
          />
          <button className="send-button" type="submit" aria-label="Enviar">
            <ArrowUp size={17} />
          </button>
        </form>
      </div>
    </section>
  )
}