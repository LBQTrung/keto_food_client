import { useContext, useEffect, useState } from 'react'
import { MealsListContext } from './contextProvider.components'

const MealsList = () => {
  const { mealsList, mealsListDispatch } = useContext(MealsListContext)
  useEffect(() => {
    getRandomMeals(mealsList.catelog)
  }, [mealsList.catelog])

  const getRandomMeals = async (category) => {
    const handledCategory = category === 'Popular' ? 'Pork' : category
    const categoryURL = 'http://localhost:4000/food/category'
    const queryParams = {
      category: handledCategory
    }
    const queryString = new URLSearchParams(queryParams).toString()
    const response = await fetch(`${categoryURL}?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      console.error(response.statusText)
    }

    const data = await response.json()
    console.log(data)

    const meals = data.result
    mealsListDispatch({
      type: 'UPDATE_MEALS_LIST',
      payload: {
        ...mealsList,
        meals: meals
      }
    })
    console.log('cùng lắm chạy 2 lần')
  }

  return (
    <div className='grid-container-3-3-3-3'>
      {!!mealsList.meals &&
        mealsList.meals.map((meal) => {
          return (
            <div className='meal-item grid-item-3-3-3-3'>
              {/* <img src={!!meal && meal.image_url} alt='bunbohue' className='meal-item-image' /> */}
              <div
                style={{ backgroundImage: `url(${!!meal && meal.image_url})` }}
                alt='bunbohue'
                className='meal-item-image'
              ></div>
              <h2 className='meal-item-name'>{!!meal && meal.meal_name}</h2>
              <div className='meal-item-origin-and-button'>
                <span className='meal-item-origin'>{(!!meal && meal.area) || mealsList.catelog}</span>
                <button className='meal-item-button'>Recipe</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default MealsList
