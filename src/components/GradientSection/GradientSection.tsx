"use client"

import { useEffect, useRef, useState } from "react"
import { useMousePosition } from "@/hooks/useMousePosition"
import style from "./GradientSection.module.css"




export function GradientSection () {

  const requestAnimationFrameRef = useRef(0)
  const [curPos, setCurPos] = useState({ x: 0, y: 0 })
  const mousePosition = useMousePosition()


  function moveCursorBlob (): void {
    setCurPos(prev => ({
      x: Math.round(prev.x + (mousePosition.x - prev.x) / 20),
      y: Math.round(prev.y + (mousePosition.y - prev.y) / 20)
    }))
    requestAnimationFrameRef.current = requestAnimationFrame(moveCursorBlob)
  }

  useEffect(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(moveCursorBlob)
    return () => cancelAnimationFrame(requestAnimationFrameRef.current)
  }, [mousePosition])


  return(
    <section className={style.gradient}>
      <h1>HELLO WORLD</h1>
      <svg>
        <defs>
          <filter id="svgFilter1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="svgFilter1" />
            <feBlend in="SourceGraphic" in2="svgFilter1" />
          </filter>
        </defs>
      </svg>
      <div className={style.blobsContainer}>
        <div className={style.blob1}></div>
        <div className={style.blob2}></div>
        <div className={style.blob3}></div>
        <div className={style.blob4}></div>
        <div className={style.blob5}></div>
        <div className={style.cursorBlob} style={{ top:`calc(-40% + ${curPos.y}px)`, left:`calc(-40% + ${curPos.x}px)` }}></div>
      </div>
    </section>
  )
}