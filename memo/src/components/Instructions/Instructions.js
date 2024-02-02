import React from 'react';
import './Instructions.css';

const Instructions = ({ onClose }) => {
    return (
        <div className="instructions-overlay">
            <div className="instructions-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div style={{ fontFamily: 'Arial, sans-serif', color: '#000', maxWidth: '600px', margin: 'auto' }}>
                    <h2 style={{ borderBottom: '3px solid #000', paddingBottom: '8px' }}>Bienvenido al "Juego de Memoria" - Desafío Mental</h2>

                    <p>
                        En este juego, tu objetivo es emparejar cartas con emojis idénticos. La interfaz del juego es sencilla pero desafiante.
                    </p>

                    <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '4px', marginTop: '16px' }}>Instrucciones:</h3>
                    <ul>
                        <li>Al iniciar el juego, verás una cuadrícula de cartas boca abajo que contienen diferentes emojis.</li>
                        <li>Haz clic en una carta para revelar su emoji y luego selecciona otra carta.</li>
                        <li>Si ambas cartas coinciden, permanecerán boca arriba. Si no coinciden, se volverán a ocultar después de un breve período.</li>
                        <li>El juego continúa hasta que todas las cartas estén emparejadas y volteadas.</li>
                        <li>Una vez que completes el juego, puedes reiniciar la partida para disfrutar de nuevos desafíos.</li>
                    </ul>

                    <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '4px', marginTop: '16px' }}>Consejos:</h3>
                    <ul>
                        <li>¡Presta atención a la ubicación de los emojis y recuerda dónde se encuentran para encontrar coincidencias más fácilmente!</li>
                        <li>Intenta terminar el juego en el menor tiempo posible para mejorar tu habilidad de memoria.</li>
                    </ul>

                    <p style={{ marginTop: '16px' }}>¡Diviértete jugando y desafiando tu memoria en este emocionante Juego de Memoria!</p>
                </div>
            </div>
        </div>
    );
};

export default Instructions;
