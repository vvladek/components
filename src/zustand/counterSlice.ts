import { StateCreator } from "zustand"


export type CounterSlice = {
  count: number
  inc: () => void
}


export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
})