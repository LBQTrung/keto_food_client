import React, { createContext, useState, useContext, useReducer, useEffect } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
}

// Classification Context
export const ClassificationContext = createContext()

const classificationReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CLASSIFICATION':
      return { ...action.payload }
    case 'RESET_CLASSIFICATION':
      return { class: '', image_url: '' }
    default:
      return state
  }
}

export const ClassificationProvider = ({ children }) => {
  const [classification, classificationDispatch] = useReducer(classificationReducer, { class: '', image_url: '' })

  useEffect(() => {
    window.addEventListener('popstate', () => {
      classificationDispatch({ type: 'RESET_CLASSIFICATION' })
    })
  })

  return (
    <ClassificationContext.Provider value={{ classification, classificationDispatch }}>
      {children}
    </ClassificationContext.Provider>
  )
}

// Instruction Context
export const InstructionContext = createContext()

const instructionReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INSTRUCTION':
      return { ...action.payload }
    case 'RESET_INSTRUCTION':
      return { active: false, ingredients: [], instructions: [], side_dishes: [] }
    default:
      return state
  }
}

export const InstructionProvider = ({ children }) => {
  const [instruction, instructionDispatch] = useReducer(instructionReducer, {
    active: false,
    ingredients: [],
    instructions: [],
    side_dishes: []
  })

  useEffect(() => {
    window.addEventListener('popstate', () => {
      instructionDispatch({ type: 'RESET_INSTRUCTION' })
    })
  })

  return (
    <InstructionContext.Provider value={{ instruction, instructionDispatch }}>{children}</InstructionContext.Provider>
  )
}

// Meal List Context
export const MealsListContext = createContext()

const mealsListReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MEALS_LIST':
      return { ...action.payload }
    default:
      return state
  }
}

export const MealsListProvider = ({ children }) => {
  const [mealsList, mealsListDispatch] = useReducer(mealsListReducer, {
    isSearch: false,
    catelog: 'Popular',
    meals: []
  })

  useEffect(() => {
    window.addEventListener('popstate', () => {
      mealsListDispatch({ type: 'UPDATE_MEALS_LIST', payload: { ...mealsList, isSearch: false, catelog: 'Popular' } })
    })
  })

  return <MealsListContext.Provider value={{ mealsList, mealsListDispatch }}>{children}</MealsListContext.Provider>
}
