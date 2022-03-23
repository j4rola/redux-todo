import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { 
    value: ['testing'],
    status: 'idle',
};

export const arraySlice = createSlice({
    name: 'array',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      addString: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        console.log(action.payload)
        state.value.push(action.payload.value)
      },
      deleteString: (state, action) => {
       
        const e = action.payload 
        const id = e.target.parentNode.id
        
     
        
        console.log(id)
        console.log(state)
        console.log(action.payload)  
        console.log(state.value)

        //state.value.filter(x => x !== text) 
         
    
      }
    },
});
export const {addString, deleteString} = arraySlice.actions
export default arraySlice.reducer