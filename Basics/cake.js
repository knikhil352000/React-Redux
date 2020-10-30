const redux = require('redux');
const createStore = redux.createStore;

/*******************Creating Actions**************************/
const BUY_CAKE = 'BUY_CAKE';

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
/*******************Creating Actions**************************/
/*******************Creating Reducers**************************/
//(previousState, action) => newState

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
/*******************Creating Reducers**************************/
/*******************Creating Redux Store**************************/
const store = createStore(reducer);//Holds application state
console.log('Initial State', store.getState());//Access to state via get state
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));//Register Listeners via Subscribe
store.dispatch(buyCake());//state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
/*******************Creating Redux Store**************************/