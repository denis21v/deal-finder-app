import { useContext } from 'react'
import GameItem from './GameItem'
import DealContext from '../../context/deal/DealContext'
import LoadingIcon from '../icons/LoadingIcon'
import { GiMoneyStack } from 'react-icons/gi'

function GamesList() {
  const { alertState, games, loading } = useContext(DealContext)

  // Check if it loaded for the first time then just show icon
  if (!loading && games.length === 0 && alertState === null) {
    return (
      <div className={'gamesList card justifyCenter alignCenter'}>
        <GiMoneyStack className={'iconScaling'} size={250} color='#e0e0e2' />
      </div>
    )
    // Check if there are alerts
  } else if (!loading && alertState !== null) {
    return (
      <div className='gamesList card justifyCenter alignCenter'>
        <p>{alertState}</p>
      </div>
    )
    // Check if its not loading and none of the above then show the games
  } else if (!loading) {
    return (
      <div className='gamesList card overflowAuto'>
        {games.map((game) => (
          <GameItem key={game.gameID} game={game} />
        ))}
      </div>
    )
  } else {
    return (
      <div className={'gamesList card justifyCenter alignCenter'}>
        <LoadingIcon className={'iconScaling'} iconSize={200} />
      </div>
    )
  }
}

export default GamesList
