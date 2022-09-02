import { useState, useContext } from 'react'
import DealContext from '../../context/deal/DealContext'
import { searchGames } from '../../context/deal/DealActions'

function GameSearch() {
  const [text, setText] = useState('')
  const { dispatch } = useContext(DealContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    //Check if nothing is typed in the search bar turn games into error message string
    if (text === '') {
      dispatch({ type: 'SET_ALERT', payload: 'Type something!' })
    } else {
      dispatch({ type: 'SET_LOADING' })
      try {
        const response = await searchGames(text)
        //Check if response is ok. If not checked it doesent reject the promise
        if (response.status !== 200) {
          dispatch({ type: 'SET_ALERT', payload: 'Not responding' })
          //Check if there are any games in the array
        } else if (response.data.length === 0) {
          dispatch({ type: 'SET_ALERT', payload: 'No games found!' })
          //If there are games then clear alert and get games
        } else {
          dispatch({ type: 'CLEAR_ALERT' })
          dispatch({ type: 'GET_GAMES', payload: response.data })
        }
        //Check for connection error
      } catch (err) {
        dispatch({ type: 'SET_ALERT', payload: `${err}` })
      }
    }
  }

  return (
    <>
      <form className={'homeForm'} onSubmit={handleSubmit}>
        <input
          className={'searchbar'}
          type='text'
          value={text}
          placeholder='Enter Game Title'
          onChange={handleChange}
        />

        <button className={'searchbarButton button'} type='submit'>
          Search
        </button>
      </form>
    </>
  )
}

export default GameSearch
