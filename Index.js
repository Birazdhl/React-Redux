const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()

const BUY_ICECREAM = 'BYE_ICECREAM'
const BUY_CAKE = 'BUY_CAKE'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'First Redux Action'
    }
}
//(prevState,action) => newState

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIcecream: 20
}

const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type){
  
     case BUY_ICECREAM : 
        return {
         ...state,
         numberOfIcecream: state.numberOfIcecream - 1
     }
 
     default : return state
 
 }
}
 const cakeReducer  = (state = initialCakeState,action) => {
    switch(action.type){
  
     case BUY_CAKE : 
        return {
         ...state,
         numberOfCakes: state.numberOfCakes - 1
     }
 
     default : return state
 
 }

}

 const rootReducer = combineReducer({
     cake: cakeReducer,
     iceCream: iceCreamReducer
 })

const store = createStore(rootReducer,applyMiddleware(logger))

console.log('Initial State - ', store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unsubscribe()

