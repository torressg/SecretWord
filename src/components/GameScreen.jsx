import React from 'react'

import './GameScreen.css'

export const GameScreen = ({ click }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={ click }>Finalizar Jogo</button>
    </div>
  )
}
