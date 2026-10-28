import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickActions from './components/QuickActions'
import ChatPanel from './components/ChatPanel'
import Footer from './components/Footer'
import { quickActions } from './data/quickActions'

export default function App() {
  const [selectedAction, setSelectedAction] = useState(null)

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <QuickActions actions={quickActions} onSelect={setSelectedAction} />
        <ChatPanel selectedAction={selectedAction} />
      </main>
      <Footer />
    </div>
  )
}