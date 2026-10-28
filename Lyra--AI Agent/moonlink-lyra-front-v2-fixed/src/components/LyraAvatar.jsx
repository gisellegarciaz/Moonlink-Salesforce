import React from 'react'
const moodAssets = {
  happy: 'feliz',
  talking: 'falando',
  thinking: 'pensando',
  surprised: 'surpresa',
  agreeing: 'concordando',
  processing: 'processando',
  pointing: 'apontando',
  explaining: 'explicando',
  celebrating: 'celebrando',
  sad: 'triste',
  confused: 'confusa',
  sleeping: 'dormindo',
}

export default function LyraAvatar({ size = 'large', active = false, mood = 'happy' }) {
  const asset = moodAssets[mood] || moodAssets.happy

  return (
    <div className={`lyra-avatar lyra-avatar--${size} ${active ? 'is-active' : ''}`}>
      <img
        src={`/assets/lyra/${asset}.png`}
        alt={`Lyra — ${mood}`}
        className="lyra-character"
      />
    </div>
  )
}
