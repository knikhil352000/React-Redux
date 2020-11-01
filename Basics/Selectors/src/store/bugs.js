import { createSlice } from '@reduxjs/toolkit';
let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState:[],
    reducers:{
        //actions => action handlers
        bugAdded: (state, action) => {
            state.push({
                id : ++lastId,
                description : action.payload.description,
                resolved : false
            });
        },
        bugResolved:(state,action)=> {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state[index].resolved = true;
        }
    }
});
export const {bugAdded,bugResolved} = slice.actions;
export default slice.reducer;
//Selector Function
export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);