import React from 'react'

import './StartScreen.css'

export const StartScreen = ({ click }) => {
    return (
        <div className='start'> 
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar</p>
            <button onClick={ click }>Jogar</button>
        </div>
    )
}
