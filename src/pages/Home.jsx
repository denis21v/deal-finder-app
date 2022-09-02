import GamesList from '../components/game/GamesList'
import GameSearch from '../components/game/GameSearch'
import RandomGame from '../components/game/RandomGame'

function Home() {
  return (
    <div className='container alignCenter'>
      <GameSearch />
      <GamesList />
      <RandomGame />
    </div>
  )
}

export default Home
