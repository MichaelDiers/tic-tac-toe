import { useState } from 'react';
import { Gameboard } from './components/Gameboard';

function App() {
  const [gameboard, setGameboard] = useState(Array(9).fill(0));
  let player = 1;

  const gameboardUpdate = (index: number) => {
    gameboard[index] += player;
    setGameboard(gameboard);
    player = -player;
  }

  return (
    <div className="App">
      <header>
        <Gameboard gameboard={gameboard} onGameboardEntryClick={gameboardUpdate} />
      </header>
    </div>
  );
}

export default App;
