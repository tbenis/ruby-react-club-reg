
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
