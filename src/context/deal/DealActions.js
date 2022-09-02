import axios from 'axios'
const DEALFINDER_URL = process.env.REACT_APP_DEALFINDER_URL

const dealFinder = axios.create({
  baseURL: DEALFINDER_URL,
})

// Find single game by id
export const searchGame = async (number) => {
  const params = new URLSearchParams({
    id: number,
  })

  const response = await dealFinder.get(`/api/1.0/games?${params}`)

  return response
}

// Find list of games by name
export const searchGames = async (text) => {
  const params = new URLSearchParams({
    title: text,
    limit: 15,
    exact: 0,
  })

  const response = await dealFinder.get(`/api/1.0/games?${params}`)

  return response
}
