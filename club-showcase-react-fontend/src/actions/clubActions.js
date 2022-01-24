
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

export const deleteClubs = (clubObject) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/clubs/${clubObject.id}.json`, { method: "DELETE" })
        .then(res => {
            dispatch({ type: 'DELETE_CLUB', payload: clubObject }) 
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

export const createClub = (userInput) => {
    let _data = {
      name: userInput.name,
      description: userInput.description,
      summary: userInput.summary,
      date_founded: userInput.dateCreated
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(_data)
    }
    
    return(dispatch) => {
        fetch('http://localhost:3000/clubs', configObj)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: 'CREATE_CLUB', payload: json['data'] }) 
        })
    }
}