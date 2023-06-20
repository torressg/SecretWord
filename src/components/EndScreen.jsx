import React from 'react'

import './EndScreen.css'

export const EndScreen = ({ click }) => {
    return (
        <div>
            <h1>EndScreen</h1>
            <button onClick={click}>Reiniciar</button>
        </div>
    )
}
