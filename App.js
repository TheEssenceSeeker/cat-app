import React from 'react'
import {LoadingContextProvider} from "./src/context/LoadingContext"
import MainPage from "./src/pages/MainPage"

export default function App() {
  return (
    <LoadingContextProvider>
      <MainPage />
    </LoadingContextProvider>
  )
}
