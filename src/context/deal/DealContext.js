import { createContext, useReducer } from 'react'
import dealReducer from './DealReducer'

const DealContext = createContext()

export const DealProvider = ({ children }) => {
  const initialState = {
    games: [],
    game: {},
    loading: false,
    alertState: null,
  }

  const [state, dispatch] = useReducer(dealReducer, initialState)

  return (
    <DealContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DealContext.Provider>
  )
}

export default DealContext
