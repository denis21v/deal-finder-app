import React from 'react'
import { Link } from 'react-router-dom'

function GameItem({ game }) {
  return (
    <>
      <Link className='gameItem' to={`/game/${game.gameID}`}>
        {game.external} <br />
      </Link>
    </>
  )
}

export default GameItem
