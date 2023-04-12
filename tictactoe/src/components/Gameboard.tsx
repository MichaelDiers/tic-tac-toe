import { GameboardEntry } from './GameboardEntry';

export function Gameboard({
  gameboard,
  onGameboardEntryClick,
}: {
  gameboard: number[],
  onGameboardEntryClick: (index: number) => void,
}) {
  return (
    <div className='gameboard'>
      <span>Gameboard</span>
      <div className='gameboard-entries'>
        {
          gameboard.map((value, i) => (
            <GameboardEntry
              value={value}
              onGameboardEntryClick={() => onGameboardEntryClick(i)}
              key={i}
            />))
        }
      </div>
    </div>
  )
}
