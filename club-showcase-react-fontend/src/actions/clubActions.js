
export const fetchClubs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CLUBS'})      
        fetch('http://localhost:3000/clubs.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_CLUBS', clubs: responseJSON })
        })
    }
}


export const getClub = (id) => {
    return (dispatch) => {   
        fetch(`http://localhost:3000/clubs/${id}.json`).then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'GET_CLUB', club: responseJSON })
        })
    }
}
