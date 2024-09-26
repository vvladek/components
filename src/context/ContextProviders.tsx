import { CounterContextProvider } from "./CounterContext";




export function ContextProviders ({ children }: Readonly<{ children: React.ReactNode }>) {
  return(
    <CounterContextProvider>
      { children }
    </CounterContextProvider>
  )
}