import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    toZero(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, toZero } = counterSlice.actions;
export const selectCurrentValue = (state: { counter: CounterState }) =>
  state.counter.value;
export const counterReducer = counterSlice.reducer;
