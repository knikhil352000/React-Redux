const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
/*******************Creating Actions**************************/
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
// {
//     type: BUY_CAKE,  //Action Basic
//     info:'first redux action'
// }

function buyCake(){
    return {
        type: BUY_CAKE,
        info:'first redux action' //Action Creater 
    }
}
function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}
/*******************Creating Actions**************************/
/*******************Creating Reducers**************************/
//(previousState, action) => newState

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCream:20
// }
const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamState = {
    numOfIceCreams :20
} 
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
/*******************Creating Reducers**************************/
/*******************Creating Redux Store**************************/
const store = createStore(rootReducer, applyMiddleware(logger));//Holds application state
console.log('Initial State', store.getState());//Access to state via get state
const unsubscribe = store.subscribe(() =>{});//Register Listeners via Subscribe
store.dispatch(buyCake());//state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
/*******************Creating Redux Store**************************/