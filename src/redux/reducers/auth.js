import states from "../states/states"


const initial_state = {
    userData: {}
}

export default function(state= initial_state, action){
    switch (action.type) {
        case states.LOGIN:
            const data = action.payload
            return {userData: data}        
        default:
            return {...state}
    }
}

