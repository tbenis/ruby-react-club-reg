const clubsReducer = (state = { clubs: [], club: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_CLUBS':
            return {
            ...state,
            clubs: [...state.clubs],
            loading: true
            }
        case 'ADD_CLUBS':
            return {
            ...state,
            clubs: action.clubs,
            loading: false
            }
        case 'GET_CLUB':
            return {
            ...state,
            club: action.club,
            loading: false
            }    
        case 'DELETE_CLUB':
            const newRes = state.clubs.filter(res => {
                return res.id !== action.payload.id
            })

            return {
                ...state,
                clubs: newRes
            }
        case 'CREATE_CLUB':
            return {
                ...state,
                clubs: [...state.clubs, action.payload]
            }

        default:
            return state;
    }
  }
  
  export default clubsReducer;