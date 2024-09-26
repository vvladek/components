"use client"

import { CounterContext } from "@/context/CounterContext"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useContext } from "react"




export default function Home () {

  const { counter, incrementCounter } = useContext(CounterContext)

  useMousePosition()

  return(
    <div>
      <span>{counter}</span>
      <button onClick={incrementCounter}>+1</button>
    </div>
  )
}
