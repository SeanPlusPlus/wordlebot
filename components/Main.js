import React from 'react'

// components
import { Controls } from '../components/Controls'
import { Game } from '../components/Game'
import { Words } from '../components/Words'

export const Main = () => {
  return (
    <main className="flex text-center pt-4">
      <div className="m-auto">
        <Controls />
        <Game />
        <Words />
      </div>
    </main>
  )
}