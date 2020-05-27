const redux = require('redux')

const createStore = redux.createStore

const initialState = {goal: 10}

function playFootball() {
    return({
        type: 'penalty'
    }) 
}

const reducer = (state=initialState,action) => {
    switch (action.type) {

        case 'penalty':
            return{
                ...state,
                goal : state.goal+1
            }
    
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial State - ', store.getState() )

const unsubscribe = store.subscribe(() => console.log('Goal scored, Current Goal - ' , store.getState()))

store.dispatch(playFootball())
store.dispatch(playFootball())
store.dispatch(playFootball())

unsubscribe()
