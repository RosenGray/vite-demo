import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const sliceKey = "counter";


interface CounterState {
  value: number;
}


const initialState: CounterState = {
  value: 0,
};


const {actions,reducer} =  createSlice({
    name: sliceKey,
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    },
  })
  

  export const { increment,decrement } = actions;

export default reducer;
