import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const initialState = {     
    value: [''],
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
        action.payload.id = (state.value.length - 1).toString()   
        state.value.push(action.payload)     
        console.log(action.payload)  

      },
      deleteString: (state, action) => {

        state.value.filter(x => x.id !== action.payload.id)  
        //console.log(state.value.filter(x => x.id !== action.payload.id))
        console.log(current(state.value))
        
      }
    },
});
export const {addString, deleteString} = arraySlice.actions
export default arraySlice.reducer