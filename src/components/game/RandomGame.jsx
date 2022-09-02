import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchGame } from '../../context/deal/DealActions'
import DealContext from '../../context/deal/DealContext'

function RandomGame() {
  const { dispatch } = useContext(DealContext)
  const navigate = useNavigate()

  const handleClick = async () => {
    dispatch({ type: 'SET_LOADING' })
    try {
      //Get random ID to get a random game
      const randomGameID = Math.floor(Math.random() * 1000)
      const response = await searchGame(randomGameID)
      //console.log(response)

      // Check if response status is ok
      if (response.status !== 200) {
        dispatch({ type: 'SET_ALERT', payload: 'NO RESPONSE' })
        // Check if there are no deals then run this again and try another random ID until there is a deal
      } else if (response.data.deals.length === 0) {
        handleClick()
      } else if (response.data.deals[0].savings === '0.000000') {
        handleClick()
      } else {
        // Clear games and errors
        dispatch({ type: 'CLEAR_GAMES' })
        dispatch({ type: 'CLEAR_ALERT' })
        navigate(`/game/${randomGameID}`)
      }
    } catch (err) {
      dispatch({ type: 'SET_ALERT', payload: `${err}` })
    }
  }

  return (
    <>
      <button className={'randomiseButton button'} onClick={handleClick}>
        RANDOMISE
      </button>
    </>
  )
}

export default RandomGame
