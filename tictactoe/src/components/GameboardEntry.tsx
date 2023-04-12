const createButton = ({
  onClick,
  value,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
  value: string,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type='button'>
      <span>{value}</span>
    </button>);
}

const mapValueToEntry = ({
  onClick,
  value,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  value: number | string,
}): JSX.Element => {
  switch (value) {
    case -1:
      return createButton({ value: 'x' });
    case 0:
      return createButton({ onClick, value: '' });
    case 1:
      return createButton({ value: 'o' });
    default:
      return createButton({ value: 'ERROR' });
  }
}

export function GameboardEntry({
  onGameboardEntryClick,
  value,
}: {
  onGameboardEntryClick: () => void,
  value: number | string,
}) {
  return (
    <div className='gameboard-entry'>
      {
        mapValueToEntry({
          onClick: (e) => { e.preventDefault(); onGameboardEntryClick(); },
          value,
        })
      }
    </div>
  )
}
