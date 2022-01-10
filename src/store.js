import { createContext } from 'react'

export const StoreContext = createContext();

export const EmailReducer = (state, action) => {
    switch (action.type) {
        case "toggleRead":
            const readState = state.map(email => email.id === action.payload.id ? action.payload : email)
            return readState
        case "toggleStar":
            const starredState = state.map(email => email.id === action.payload.id ? action.payload : email)
            return starredState
        default: 
            return state   
    }
}