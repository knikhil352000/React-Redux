const redux = require('redux');
const createStore = redux.createStore;

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

const initialState = {
    numOfCakes : 10,
    numOfIceCream:20
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream : state.numOfIceCream - 1
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
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
/*******************Creating Redux Store**************************/