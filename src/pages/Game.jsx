import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import LoadingIcon from '../components/icons/LoadingIcon'
import { GiGamepad } from 'react-icons/gi'
import { searchGame } from '../context/deal/DealActions'
import DealContext from '../context/deal/DealContext'
import NotFound from './NotFound'

function Game() {
  const { alertState, loading, game, dispatch } = useContext(DealContext)
  const [gameLoaded, setGameLoaded] = useState(false)
  const [dealAvailable, setDealAvailable] = useState(true)
  const [gameStore, setGameStore] = useState('')
  const params = useParams()

  //Method to get store name as the response returns just the storeID
  const convertStoreIdToName = (id) => {
    switch (id) {
      case '1':
        setGameStore('Steam')
        break
      case '11':
        setGameStore('The Humble Store')
        break
      case '3':
        setGameStore('Green Man Gaming')
        break
      case '23':
        setGameStore('Game Billet')
        break
      case '15':
        setGameStore('Fanatical Deals')
        break
      case '27':
        setGameStore('Games Planet')
        break
      case '7':
        setGameStore('GOG')
        break
      case '21':
        setGameStore('Win Game Store')
        break
      case '2':
        setGameStore('Gamers Gate')
        break
      case '32':
        setGameStore('All You Play')
        break
      default:
        break
    }
  }

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getGameData = async () => {
      try {
        const response = await searchGame(params.id)

        // Check if response status is ok
        if (response.status !== 200) {
          dispatch({ type: 'SET_ALERT', payload: 'NO RESPONSE' })
          // this check shows if response has the data
        } else if (response.data.deals.length === 0) {
          dispatch({ type: 'SET_ALERT', payload: 'GAME NOT FOUND' })
          // Checks if there is a deal in this game response
        } else if (response.data.deals[0].savings === '0.000000') {
          dispatch({ type: 'GET_GAME', payload: response.data })
          convertStoreIdToName(response.data.deals[0].storeID)
          setDealAvailable(false)
          // If none of the above that means deal found
        } else {
          dispatch({ type: 'GET_GAME', payload: response.data })
          convertStoreIdToName(response.data.deals[0].storeID)
        }
      } catch (err) {
        dispatch({ type: 'SET_ALERT', payload: `${err}` })
      }
      setGameLoaded(true)
    }

    getGameData()
  }, [dispatch, params.id])

  const { cheapestPriceEver, deals, info } = game

  if (loading) {
    return (
      <div className='container alignCenter' style={{ marginTop: '20rem' }}>
        <div className='gameLoadingIcon '>
          <LoadingIcon iconSize={150} />
        </div>
      </div>
    )
    //Without checking if gameLoaded the page is rendered before the fetch with info.title undefined and causes an error
  } else if (gameLoaded && alertState === null) {
    return (
      <div className='container alignCenter'>
        <div className='gameInfo card alignCenter'>
          <h2>{info.title}</h2>
          <GiGamepad className={'iconSizing'} size={150} />
          <div className='gameInfoItem'>
            <h3>Retail Price </h3>
            <p>{deals[0].retailPrice} $</p>
          </div>
          <div className='gameInfoItem'>
            <h3>Cheapest Price Ever Recorded </h3>
            <p>{cheapestPriceEver.price} $ </p>
          </div>
        </div>

        <div className='gameDeal card alignCenter'>
          {/* Check if there is a deal */}
          {dealAvailable ? (
            <>
              <h2>Best Deal</h2>

              <div className='gameDealItem'>
                <h3>Store</h3>
                <p>{gameStore}</p>
              </div>

              <div className='gameDealItem'>
                <h3>Price </h3>
                <p>{deals[0].price} $</p>
              </div>

              <div className='gameDealItem'>
                <h3>Discount </h3>
                <p>
                  {deals[0].savings.substring(0, deals[0].savings.indexOf('.'))}
                  %
                </p>
              </div>

              <div className='gameDealItem'>
                <h3>YOU SAVE</h3>
                <p>
                  {/* Getting the price with two digits after the dot */}
                  {(deals[0].retailPrice - deals[0].price)
                    .toString()
                    .substring(
                      0,
                      (deals[0].retailPrice - deals[0].price)
                        .toString()
                        .indexOf('.') + 3
                    )}{' '}
                  $
                </p>
              </div>
            </>
          ) : (
            <>
              <h3>No deals available</h3>
            </>
          )}
        </div>

        <button
          className={'gameBuyButton button'}
          onClick={() =>
            window.open(
              `https://www.cheapshark.com/redirect?dealID=${deals[0].dealID}`
            )
          }
        >
          VISIT STORE
        </button>
      </div>
    )
  } else if (gameLoaded && alertState !== null) {
    return <NotFound secondMessage={alertState} />
  }
}

export default Game
