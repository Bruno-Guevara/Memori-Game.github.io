import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import Board from './components/Board/Board';
import Instructions from './components/Instructions/Instructions';

const emojiList = [...'💎🗿👹👾🐖🦀🌍🔮'];

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  

  useEffect(() => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
  }, []);

  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);

    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);

      // Verifica si todas las cartas están volteadas
      const allFlipped = shuffledMemoBlocksCopy.every(block => block.flipped);

      if (allFlipped) {
        setShowResetButton(true);
        setShowConfetti(true);
      }
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  }

  const handleResetClick = () => {
    setShowInstructions(false);
    setShowConfetti(false);
    setShowResetButton(false);
    window.location.reload();
  }

  const handleInstructionsClick = () => {
    setShowInstructions(true);
  }

  // Determina si se deben mostrar las instrucciones debajo del h1
  const shouldShowResetButton = shuffledMemoBlocks.every(block => block.flipped);


  return (
    <div className="app-container">
      <h1>Juego de Memoria</h1>
      <div className="button-wrapper">
        <button className="buttonn" onClick={handleInstructionsClick}>
          ¿Cómo jugar?
        </button>
        
      </div>
      <div className="button-container">
        <Board
          memoBlocks={shuffledMemoBlocks}
          animating={animating}
          handleMemoClick={handleMemoClick}
        />


        {shouldShowResetButton && (
          <div className="button-wrapper">
            <button className="button" onClick={handleResetClick}>
              Reiniciar
            </button>
          </div>
        )}

        {showInstructions && (
          <Instructions onClose={() => setShowInstructions(false)} />
        )}

        {showConfetti && (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            {/* Oculta la barra de desplazamiento durante la animación */}
            <style>
              {`body { overflow: hidden; }`}
            </style>
            <div className="gif-container">
              <img className='img' src="https://media.tenor.com/9u-hGgwe1x4AAAAi/celebrate-emoji.gif" alt="GIF " />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;