"use client"

import { useBoundStore } from "@/zustand/store"



export default function Home() {

  const { count, inc } = useBoundStore()

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>+1</button>
    </div>
  )
}
