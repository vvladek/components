"use client"

import { createContext, useState } from "react"



export const CounterContext = createContext<any>(null)



export function CounterContextProvider ({ children }: Readonly<{ children: React.ReactNode }>) {
  
  const [counter, setCounter] = useState<number>(0)

  function incrementCounter (): void {
    setCounter(state => state += 1)
  }

  return(
    <CounterContext.Provider value={{ counter, incrementCounter, setCounter }}>
      { children }
    </CounterContext.Provider>
  )
}