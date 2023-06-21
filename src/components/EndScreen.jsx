import React from 'react'

import './EndScreen.css'

export const EndScreen = ({ click, score }) => {
    return (
        <div>
            <h1>Não foi dessa vez...</h1>
            <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={click}>Reiniciar</button>
        </div>
    )
}
