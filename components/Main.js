import React from 'react'

// components
import { Controls } from '../components/Controls'
import { Game } from '../components/Game'
import { Result } from '../components/Result'

export const Main = () => {
  return (
    <main className="flex text-center pt-4">
      <div className="m-auto">
        <Controls />
        <Game />
        <Result />
      </div>
    </main>
  )
}