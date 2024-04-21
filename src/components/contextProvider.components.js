import React, { createContext, useState, useContext } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
}

export const ClassificationContext = createContext()

export const ClassificationProvider = ({ children }) => {
  const [classification, setClassification] = useState('')

  return (
    <ClassificationContext.Provider value={{ classification, setClassification }}>
      {children}
    </ClassificationContext.Provider>
  )
}
