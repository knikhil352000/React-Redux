const { BUY_CHOCOLATE } = require("./chocolateTypes");

const initialState = {
    numOfChocolates : 15
}

const chocolateReducer = (state = initialState, action) =>{
    switch (action.type) {
        case BUY_CHOCOLATE:return{
            ...state,
            numOfChocolates: state.numOfChocolates - 1
        }
        default:return state
    }
}
export default chocolateReducer;