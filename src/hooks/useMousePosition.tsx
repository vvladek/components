"use client"

import { CounterContext } from "@/context/CounterContext"
import { useContext, useEffect } from "react"



export function useMousePosition () {

  const { counter, setCounter } = useContext(CounterContext)

  function handleMouseMove (event: MouseEvent): void {
    setCounter(() => event.clientX)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])


  return null
}