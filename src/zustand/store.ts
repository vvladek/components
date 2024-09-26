import { create } from "zustand"
import { CounterSlice, createCounterSlice } from "./counterSlice"







export const useBoundStore = create<CounterSlice>()((...a) => ({
  ...createCounterSlice(...a)
}))